"use server"
import {z} from 'zod'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const formSchema = z.object({
    username : z.string().min(1),
    email: z.string(),
    password:z.string()
  })

export async function createUser(data:FormData) {
    console.log(data)
    
   const validatedFields = formSchema.safeParse({
     username : data.get("username")?.valueOf(),
     email : data.get("email")?.valueOf(),
     password : data.get("password")?.valueOf()
   })

   if(!validatedFields.success){
    console.log("Error occured",validatedFields)

    return{
      type:'error',
      errors : validatedFields.error.flatten(),
      message : 'failed to create user'
      
    }
   }

   const {username,email,password} = validatedFields.data


    if(typeof username != "string" || typeof email != "string" || typeof password != "string"){
        throw new Error("Invalid type")
    }
    try {
      await prisma.user.create({
        data : {
        username,
        email,
        password
    }})
    } catch (error) {
      return {
        type:'error',
        message:' Database error in creating user',
        errors:error
      }
    }
   

    const dataAll = await prisma.user.findMany()
    console.log(dataAll)

}
