import axios from 'axios'
import React from 'react'

function App() {
  return (
    <div className='flex justify-center m-[100px] gap-4'>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300"
      onClick={async()=>{
       try {
        let {data} = await axios.get("http://localhost:3000/")
       console.log(data)
       } catch (error) {
        console.log(error)
       }
      }}
      >
        BLINK
    </button>

    {/* <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition duration-300"
      onClick={async()=>{
        await axios.get("http://192.168.1.7/off")
      }}
      >
        OFF
    </button> */}
    </div>
  )
}

export default App