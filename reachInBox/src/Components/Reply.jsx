import React from 'react'
import close from '../Images/close.png'
import { useState } from 'react'
import send from '../Images/sendbtn.png'
function Reply({reply,setReply,setData,data}) {
    const[to,setTo] = useState("shaw@getmemeetings.com")
    const[from,setFrom] = useState("mitrajit2022@gmail.com")
    const[subject,setSubject] = useState("")
    const[body,setBody] = useState("")
  return (
    <div className={`h-[100%] w-[100%] bg-[#424141] opacity-95 z-[99] absolute  items-center justify-center ${reply?"flex":"hidden"}` }>

        <div className="h-[70%] w-[60%] px-3 py-3">
            <div className="w-[100%] h-[3vw] flex items-center justify-between bg-[#23262C] px-4">
                <h1 className='text-xl text-white'>Reply</h1>
                <img src={close} alt="" className="cursor-pointer" onClick={()=>{
                    setReply(false)
                }}/>
            </div>
            <div className="w-[100%] h-[80%] bg-[#41464B]">
                <div className="w-[100%] h-[6vh] flex items-center">
                    <h1 className='text-white mr-2'>To: </h1>
                    <input type="text" className='bg-transparent text-white' value={to}/>
                </div>
                <div className="w-[100%] h-[6vh] flex items-center" style={{borderBottom:"0.1rem solid #21262A"}}>
                    <h1 className='text-white mr-2'>From: </h1>
                    <input type="text" className='bg-transparent text-white' value={from}/>
                </div>
                <div className="w-[100%] h-[6vh] flex items-center" style={{borderBottom:"0.1rem solid #21262A"}}>
                    <h1 className='text-white mr-2'>Subject: </h1>
                    <input type="text" className='bg-transparent text-white' value={subject} onChange={(e)=>{
                        setSubject(e.target.value)
                    }}/>
                </div>
                <div className="w-[100%] h-[40%] " style={{borderBottom:"0.1rem solid #21262A"}}>
                  
                    <textarea type="text" className='bg-transparent text-white h-100% w-full resize-none' value={body} onChange={(e)=>{
                        setBody(e.target.value)
                    }} />
                </div>
               <img src={send} alt="" onClick={()=>{
                let ojb = {fromEmail:from, toEmail:to, subject:subject, body:body, id:Math.floor(Math.random()*10000000)}
                setData([...data,ojb])
                setReply(false)
               }}/>

            </div>
        </div>
    </div>
  )
}

export default Reply