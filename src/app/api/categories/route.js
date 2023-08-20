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
    console.log(reqBody)
    try{
        const newCategory = new Categories(reqBody)
        const addedCategory = await newCategory.save()
        if(addedCategory){
            return NextResponse.json(addedCategory, {msg:"Category Added successfully"},{status: 200})
        }
        else return NextResponse.json({msg:"Error in adding category"},{status:402})
    }
    catch(error){
        console.log(error)
    }
}