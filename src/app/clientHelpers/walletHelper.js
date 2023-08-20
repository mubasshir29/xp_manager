import axios from "axios"

export const getAllWallets = async () => {
    const data = await axios.get("http://localhost:3000/api/wallets")
    const {allWallets} = data.data 
    console.log(allWallets)
    return allWallets
}

export const addWallet = async (walletData) => {
    let addWalletData ={}
    for(const KEY in walletData){
        if(KEY == "initialAmount"){
            addWalletData["balance"] = walletData[KEY]
        }
        else addWalletData[KEY] = walletData[KEY]
    }
    console.log(addWalletData, Date.now())
    const addResponse = await axios.post("http://localhost:3000/api/wallets",addWalletData)
    
    
}

