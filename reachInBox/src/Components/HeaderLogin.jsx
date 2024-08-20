import React from 'react'
import img from '../Images/logo.png'
function HeaderLogin() {
  return (
    <div className='w-[100vw] h-[10vh] bg-black flex items-center justify-center  relative' >
        <div className="w-[30vh] h-[35%]">
            <img src={img} alt="" className='h-[100%] w-[100%] object-cover object-center'/>
            <div className=" absolute bottom-0 left-0 w-[100%] h-[0.1em] bg-[#21262A]"></div>
        </div>
    </div>
  )
}

export default HeaderLogin