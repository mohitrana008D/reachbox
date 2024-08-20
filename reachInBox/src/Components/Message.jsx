import React from 'react'

function Message({dark,subject,from,to,body}) {
  return (
    <div className={`w-[60%]  ${dark?"bg-[#141417]":"bg-[#F9F9F9] "} px-3 py-2 rounded-lg`}style={{borderTop:"0.1rem solid #21262A"}}>
        <h1 className={`${dark?"text-white":"text-black"} text-xl font-normal`}>{subject}</h1>
        <h1 className={`${dark?"text-white":"text-black"} text-md opacity-50 font-bold my-1`}> <span className='mr-2'>from: </span> {from}</h1>
        <h1 className={`${dark?"text-white":"text-black"} text-md opacity-50 font-bold my-1`}> <span className='mr-2'>to: </span> {to}</h1>
        <p className={`${dark?"text-white":"text-black"} text-md tracking-wider my-2`} dangerouslySetInnerHTML={{__html:body}}></p>

    </div>
  )
}

export default Message