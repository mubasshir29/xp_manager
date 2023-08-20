import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  type: String,
  name: String,
  cardLastDigits: Number,
  balance: Number,
  color: String,
  currency: String,
  imageUrl: String,
});

const walletModel =
  mongoose.models.wallets || mongoose.model("wallets", walletSchema);

export default walletModel;
