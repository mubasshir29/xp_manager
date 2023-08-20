import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
    type:String,
    name:String,
    initialAmount:Number,
    color:String,
    currency:String,
    icon:String,

})

const walletModel = mongoose.models.wallets || mongoose.model("wallets",walletSchema)

export default walletModel