import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

function Loader() {
  return (
    <div className='relative top-0 left-0 w-full h-full bg-red-500 bg-opacity-50 z-50 flex justify-center items-center'>
        <div className='fixed self-center'>
        <BeatLoader color="#566fc3" />
        </div>
    </div>
  )
}

export default Loader