import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";

function Spinner() {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 z-50 flex justify-center items-center'>
        <FadeLoader color="#566fc3" />
    </div>
  )
}

export default Spinner