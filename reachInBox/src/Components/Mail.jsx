import React from 'react'
import Capsule from './Capsule'
import { data } from 'autoprefixer'

function Mail({dark,fromEmail, subject,index,setCurr,data,d}) {
  return (
    <div className='w-[100%] h-[30vh]  py-4 px-2' style={{borderBottom:"0.1rem solid #21262A",borderTop:"0.1rem solid #21262A"} } onClick={()=>{
      setCurr(d);
      
    }}>
    
      <h1 className={`${dark?"text-white":"text-black"} text-lg font-bold`}>{fromEmail}</h1>
      <h2 className={`${dark?"text-white":"text-black"} text-sm font-light`}>{subject}</h2>
      <div className="w-[100%] flex items-center justify-between">
        <Capsule dark={dark} content={"Interested"}/>
        <Capsule dark={dark} content={"Company"}/>
      </div>
    
    </div>
  )
}

export default Mail