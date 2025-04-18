import { getAuth ,GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { doc, serverTimestamp, setDoc,getDoc } from 'firebase/firestore';
import {db} from '../firebase';


export default function OAuth() {
  const navigate = useNavigate();
async  function onGoogleClick(){
  
try {
  const auth = getAuth();
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  
  const user = result.user;
  //CHECK FOR THE USER
  const docRef = doc(db,"users", user.uid)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()){
    await setDoc(docRef,{
      name: user.displayName,
      email: user.email,
      Timestamp: serverTimestamp(),
    });
  }
  navigate('/');
}catch (error) {
  toast.error("Could not authenticate with Google");
  
}
  }
  return (
    <button type='button' onClick={onGoogleClick} className='flex items-center justify-center w-full text-white bg-red-700 px-7 py-3
    text-sm font-medium hover:bg-red-800  shadow-md hover:shadow-lg active:bg-red-900 active:shadow-lg
    transition duration-150 ease-in-out'>
     <FcGoogle className='text-2xl bg-white rounded-full mr-2' /> Continue with Google
    </button>
  )
}
