"use client";
import { addProductToDatabase } from '@/actions/serverActions';
import React, { useTransition } from 'react'

const AddProductButton = () => {
    //useTransition is used to make some code/function run later
    const [isPending , startTransation] = useTransition();
    const formData = new FormData();
    formData.append("product", "MSI");
    formData.append("price","1100");
  return (
    <button
    onClick={()=>startTransation(()=>addProductToDatabase(formData))}
    className='fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48'
    >  {isPending ? "Adding" : "Add MSI"} </button>
  )
}

export default AddProductButton