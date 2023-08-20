import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../dbConnect/dbConfig";
import Wallet from '@/src/app/models/walletModel'

connectDB()

export async function GET(){

    const allWallets = await Wallet.find()
    if(allWallets.length >0){
        return NextResponse.json({allWallets},{status:200})
    }
    else return NextResponse.json({msg:"no record found"},{status:200})
}

export async function POST(request){
    console.log("From server")
    const reqBody = await request.json()
    console.log(reqBody)
    try{
        const newWallet = new Wallet(reqBody)
        const addedWallet = await newWallet.save()
        if(addedWallet){
            console.log(addedWallet)
            return NextResponse.json(addedWallet, {status:200}, {msg:"Wallet Added Successfully"})
        }
        else return NextResponse.json({msg:"There is an error"},{status:402})
    }
    catch(error){
        console.log(error)
    }
    return NextResponse.json({msg:"Something"},{status:200})
}