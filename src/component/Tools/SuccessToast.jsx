import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SuccessToast({message}) {
    toast(message)
  return (
    <div>
        <ToastContainer />
    </div>
  )
}

export default SuccessToast