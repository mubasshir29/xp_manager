import mongoose, { mongo } from 'mongoose'

const connectDB = async ()=>{

    try{
        const connection = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        connection.on("error", (err)=>{
            console.log("MongoDb connection error, please make sure MongoDB is running")
        })
        connection.on("connected",()=>{
            console.log("Successfully connected")
        })
    }
    catch(error){
        console.log(error)
    }
}

export default connectDB



