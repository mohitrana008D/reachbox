import React from 'react'
import lightCon from '../Images/lightCon.png'
import darkCon from '../Images/darkCon.png'



function RightCenter({dark}) {
  return (
    <div className={`w-[20%] h-[100%] ${dark ? "bg-[#101013]":"bg-white"} absolute top-0 right-0` }>
   
 <img src={dark?darkCon:lightCon} alt="" className=' object-cover overflow-hidden'/>
<div className="absolute h-[100%] w-[0.1rem] bg-[#21262A] left-0 top-0"></div>
    </div>
  )
}

export default RightCenter