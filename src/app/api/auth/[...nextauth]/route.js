import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
//import users from '@/src/sample_data/userDB'
import User from "@/src/app/models/userModel";
import bcrypt from 'bcryptjs'
import connectDB from "@/src/app/dbConnect/dbConfig";

export const authOptions  = {
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{},
            async authorize(credentials){
                const {email, password} = credentials
                try{
                    await connectDB()
                    const user = await User.findOne({email})
                    if(!user){
                        return null
                    }
                    const passwordMatch = bcrypt.compare(password,user.password)
                    if(!passwordMatch){
                        return null
                    }
                    return user
                }
                catch(error){
                    console.log(error)
                }
                // if(!credentials || !credentials.email || !credentials.password){
                //     return null
                // }
                // const user = users.find(item => item.email === credentials.email)

                // if(user?.password == credentials.password){
                //     return user
                // }
                // return null
            }
        }) 
    ],
    session:{
        strategy:"jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: "/login"
    }
}
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}