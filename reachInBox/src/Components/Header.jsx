import React from 'react'
import darkMode from '../Images/darkMode.png'
import lightMode from '../Images/lightMode.png'
import arrowDark from '../Images/arrowDark.png'
import arrowLight from '../Images/arrowLight.png'
function Header({dark,setDark}) {
  return (
    <div className={`w-[95vw] h-[5vw] ${dark ? "bg-[#101013]" : "bg-white"} ml-[5vw] absolute top-0 flex items-center justify-between px-[2vw]`}>
  <h1 className={`text-lg font-bold ${dark?"text-white": "text-black"}`}>Onebox</h1>
  <div className="flex items-center justify-center gap-4">
<img src={dark? darkMode : lightMode}alt="" onClick={()=>{
    setDark(!dark)
  
}}/>
<div className="flex items-center justify-between gap-3">
<h1 className={`${dark?"text-white":"text:black"} text-md`}>Tim's Workspace</h1>
<img src={dark?arrowDark:arrowLight} alt="" />
</div>
  </div>

        <div className="absolute w-[100%] h-[0.1rem] bg-[#21262A] bottom-0 left-0"></div>
    </div>
  )
}

export default Header