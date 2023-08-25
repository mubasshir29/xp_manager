import { NextResponse } from "next/server"
import connectDB from "../../dbConnect/dbConfig"
import User from '@/src/app/models/userModel'
import bcrypt from 'bcryptjs'

connectDB()

export async function POST(req){
    try{
        console.log("API Signup")
        const reqBody=  await req.json()
        const hashedPassword = await bcrypt.hash(reqBody.password, 10)
        const newUser = new User({...reqBody, password: hashedPassword})
        const createdUser = await newUser.save()
        if(createdUser._id){
            return NextResponse.json({msg:"User registered"},{status:201})
            console.log(createdUser)
        }
    }
    catch(error){
        return NextResponse.json({msg: "An error occured"}, {status: 500})
    }   
}