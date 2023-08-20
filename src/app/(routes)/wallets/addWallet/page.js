'use client'
import React, { useEffect, useState } from 'react'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import storage from '@/src/firbase'
import {addWallet} from '@/src/app/clientHelpers/walletHelper'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const AddWallet = () => {
    const router = useRouter()
    const [percent,setPercent] = useState()
    const [uploaded,setUploaded] = useState(false)
    const [imageFile,setImageFile]=useState()
    const [wallet,setWallet] = useState({
        type:"",
        name:"",
        cardLastDigits:"",
        initialAmount:"",
        color:"",
        currency:"",
        imageUrl:"",
    })
    const onFormChange = (e) => {
         setWallet((prev)=>({...prev, [e.target.name]:e.target.value}))
        //console.log(wallet)
    }
     
    const onImageChange = (e) => {
        setImageFile(e.target.files[0])
        //console.log(e.target.files[0])
    }

    const uploadImage =  ()=>{
            if(!imageFile){
                console.log("Please select a file")
            }
            console.log("Filename:",imageFile.name)
            const storageRef = ref(storage, `/walletImages/${imageFile.name}-${Date.now()}`)
            const uploadTask = uploadBytesResumable(storageRef, imageFile)
    
            uploadTask.on("state_changed", (snapshot) => {
                const percent = Math.round((snapshot.bytesTransferred/ snapshot.totalBytes)*100)
                setPercent(percent)
                console.log(percent)
            }, (err)=>{
                console.log(err)
                
            }, ()=>{
                console.log("Entering succesfful code")
                
                //console.log("Upload set to true",uploaded)
                getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
                    console.log("Image Url is",url)
                    setWallet((prev) => ({...prev, imageUrl:  url}))
                    setUploaded(true)
                    //setUploaded(true)
                })
                
            })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        // try{
        //     const walletData = await uploadImage()
        //     if(walletData.imageUrl){
        //         setUploaded(true)
        //     }
        // }
        // catch(error){
        //     console.log(error)
        // }
        
        uploadImage()
        //console.log(Date.now())
    }
    useEffect(()=>{
        if(wallet.imageUrl){
            //console.log(wallet)
            const response = addWallet(wallet)
            if(response){
                window.alert("Successfully added")
                router.back()
            }
        }
        
    },[uploaded])
    
  return (
    <div className='w-full py-[15px]'>
        <div className='w-[520px] mx-auto p-8 bg-white rounded-xl'>
            <h2 className='text-2xl font-bold'>Add Wallet</h2>
        <form onSubmit={(e)=>{handleFormSubmit(e)}} className='mt-4 appearance-none space-y-4'>
            <div className='flex flex-col gap-2'>
                <label>Type</label>
                <select name='type' onChange={(e)=>onFormChange(e)} className='px-4 py-2 border border-slate-200 rounded-lg'>
                    <option value="Cash</">Cash</option>
                    <option value="Credit-Card">Credit Card</option>
                    <option value="Debit-Card">Debit Card</option>
                </select>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Name</label>
                <input name='name' onChange={(e)=>onFormChange(e)} className='px-4 py-2 border border-slate-300 rounded-lg' type='text' placeholder='Ex: Monthly Budget'></input>
            </div>

            {(wallet.type === 'Credit-Card' || wallet.type === 'Debit-Card') && (<div className='flex flex-col gap-2'>
                <label>Last 4 digits</label>
                <input name='cardLastDigits' onChange={(e)=>onFormChange(e)} className='px-4 py-2 border border-slate-300 rounded-lg' type='text' placeholder='Ex: 1234'></input>
            </div>) }

            <div className='flex flex-col gap-2'>
                <label>Initial Amount</label>
                <input name='initialAmount' onChange={(e)=>onFormChange(e)} className='px-4 py-2 border border-slate-300 rounded-lg' type='text' placeholder='AED 0'></input>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Color</label>
               <select name='color' onChange={(e)=>onFormChange(e)} className='px-4 py-2 border border-slate-200 rounded-lg'>
                <option value="#ef5350">1</option>
                <option value="#ab47bc">1</option>
                <option value="#64b5f6">1</option>
                <option value="#ab47bc">1</option>
               </select>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Image</label>
               <input name='image' onChange={(e)=>onImageChange(e)} className='px-4 py-2 border border-slate-300 rounded-lg' type='file'></input>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Currency</label>
               <select name='currency' onChange={(e)=>onFormChange(e)} className='px-4 py-2 border border-slate-200 rounded-lg'>
                <option >AED</option>
                <option >INR</option>
                <option >USD</option>
                <option >SAR</option>
               </select>
            </div>
            {percent ? <p>{percent}</p> : ""}

            <div className='flex justify-center p-4'>
                <button type='submit' className='bg-indigo-500 rounded-lg text-white px-8 py-2'>Save</button>
            </div>

        </form>
        </div>
    </div>
  )
}

export default AddWallet