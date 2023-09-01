import mongoose from mongoose;

const transactionSchema = new mongoose.Schema({
    time: String,
    type:String,
    category:String,
    label:String,
    amount:Number,
    invoice: String,
    notes:String
});

const transactionModel =  mongoose.models.transactions || mongoose.model(transactions, transactionSchema);

export default transactionModel;
