import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
    type:String,
    name:String,
    initialAmount:Number,
    color:String,
    currency:String,
    icon:String,

})

const categoryModel = mongoose.models.categories || mongoose.model("categories",categorySchema)

export default categoryModel