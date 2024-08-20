import React from 'react'
import topDark from '../Images/topContent.png'
import topLight from '../Images/topContentLight.png'

function TopCenter({dark}) {
  return (
    <div className={`absolute left-[20%] top-0 w-[60%] h-[5vw]  flex items-center justify-between px-3 py-1`}>
        <div className="">
        <h1 className={`${dark?"text-white":"text-black"} text-xl`}>Orlando</h1>
        <h2 className={`${dark?"text-white":"text-black"} text-md opacity-60`}>orlandom@gmail.com</h2>
        </div>
        <div className=""><img src={dark?topDark:topLight} alt="" /></div>
        <div className=" absolute bottom-0 left-0 w-[100%] h-[0.1em] bg-[#21262A]"></div>
    </div>
  )
}

export default TopCenter