import axios from 'axios'

export const addCategory = async (categoryData) => {
    console.log(categoryData)
    const response = await axios.post('/api/categories/',categoryData)
    console.log(response)
    if(response.status == 200){
        return {status: true, msg: "Category added successfully"}
    }
    else false
}


export const getAllCategories = async ()=>{
    const data = await axios.get('/api/categories')
    const {allCategories} = data.data
    return allCategories
    
}