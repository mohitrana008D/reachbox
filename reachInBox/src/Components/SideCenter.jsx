import React from 'react'
import Mail from './Mail'

function SideCenter({dark,data,curr,setCurr}) {
  return (
    
    <div className={` w-[20%] h-[100%]  absolute top-0 left-0 px-2 py-2 `} style={dark?{background:"black"}:{background:"white"}}>

<div className={`w-[100%] h-[10vh] ${dark? "bg-transparent":"bg-white"} flex items-start justify-between `}>
  <h1 className={`text-blue-600 text-lg relative tracking-wide`}>All Inbox(s) <span className=' inline-block rotate-180 absolute top-[-2vh] ml-2'>^</span></h1>
  {dark?<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="4" fill="#25262B"/>
<path d="M19.7633 12.2334C18.7966 11.2667 17.4699 10.6667 15.9966 10.6667C13.0499 10.6667 10.6699 13.0534 10.6699 16.0001C10.6699 18.9467 13.0499 21.3334 15.9966 21.3334C18.4833 21.3334 20.5566 19.6334 21.1499 17.3334H19.7633C19.2166 18.8867 17.7366 20.0001 15.9966 20.0001C13.7899 20.0001 11.9966 18.2067 11.9966 16.0001C11.9966 13.7934 13.7899 12.0001 15.9966 12.0001C17.1033 12.0001 18.0899 12.4601 18.8099 13.1867L16.6633 15.3334H21.3299V10.6667L19.7633 12.2334Z" fill="#F6F6F6"/>
</svg>:<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#DFE3E8"/>
<path d="M19.7633 12.2332C18.7966 11.2665 17.4699 10.6665 15.9966 10.6665C13.0499 10.6665 10.6699 13.0532 10.6699 15.9998C10.6699 18.9465 13.0499 21.3332 15.9966 21.3332C18.4833 21.3332 20.5566 19.6332 21.1499 17.3332H19.7633C19.2166 18.8865 17.7366 19.9998 15.9966 19.9998C13.7899 19.9998 11.9966 18.2065 11.9966 15.9998C11.9966 13.7932 13.7899 11.9998 15.9966 11.9998C17.1033 11.9998 18.0899 12.4598 18.8099 13.1865L16.6633 15.3332H21.3299V10.6665L19.7633 12.2332Z" fill="#172B4D"/>
</svg>
}
  



</div>
<div className=""><h3 className={`text-md ${dark?"text-white":"text:black"} mt-[-2vw]`}>{`${data.length}/${data.length} `} <span className=' opacity-40'>inboxes selected</span></h3></div>
<div className="w-[100%] my-3">
  <input type="text" placeholder='Search' className={` rounded-md ${dark ? 'bg-[#23262C]':'bg-[#E7E8EB] w-[100%]'} px-3 h-[4vh] text-sm ${dark?"text-white":"text:black"}`}/>
</div>
<div className="w-[100%] flex items-center justify-between">
  <h1 className={`${dark?"text-white":"text-black"}`}> <span className={` text-blue-600 px-2 py-2 rounded-full ${dark?"bg-[#23262C]":"bg-[#F9F9F9]"}`}>26</span> New Replies</h1>
  <h1 className={`${dark?"text-white":"text-black"} relative px-4`}>Newest <span className=' inline-block rotate-180 absolute top-[-1vh] mx-2'>^</span></h1>
</div>
{console.log(data)}
<div className="mt-4 w-[100%] overflow-scroll">
{data.map((d,i)=><Mail dark={dark} fromEmail={d.fromEmail} subject={d.subject} key={d.id} index={i} setCurr = {setCurr} data={data} d={d}/>)}
</div>
<div className="h-[100%] w-[0.1rem] bg-[#21262A] absolute top-0 right-0"></div>

    </div>
  )
}

export default SideCenter