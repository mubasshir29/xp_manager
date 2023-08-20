import axios from "axios"

export const getAllWallets = async () => {
    const allWallets = await axios.get("http://localhost:3000/api/wallets")
}

export const addWallet = async (walletData) => {
    console.log(walletData, Date.now())
    const addResponse = await axios.post("http://localhost:3000/api/wallets",walletData)
    
    
}

