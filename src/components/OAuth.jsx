import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className='flex items-center justify-center w-full text-white bg-red-700 px-7 py-3
    text-sm font-medium hover:bg-red-800  shadow-md hover:shadow-lg active:bg-red-900 active:shadow-lg
    transition duration-150 ease-in-out'>
     <FcGoogle className='text-2xl bg-white rounded-full mr-2' /> Continue with Google
    </button>
  )
}
