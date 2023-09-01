import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required : [true, "Please provide username"],
    },
    email: {
        type: String,
        required : [true, "Please provide email address"],
        unique: true
    },
    password: {
        type: String,
        required : [true, "Please provide a password"],
    },
    wallets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet'
    }],
   transactions : [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Transaction"
   }],
   categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    

},
{timestamps: true});

const User = mongoose.models.users || new mongoose.model('users',userSchema)

export default User