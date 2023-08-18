import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../dbConnect/dbConfig";
import Categories from '@/src/app/models/categoryModel.js'

connectDB()

export async function GET(){

    const allCategories = await Categories.find()
    if(allCategories.length >0){
        return NextResponse.json({allCategories},{status:200})
    }
    else return NextResponse.json({msg:"no record found"},{status:200})
}

export async function POST(request){
    const reqBody = await request.json()

    return NextResponse.json({msg:"Something"},{status:200})
}