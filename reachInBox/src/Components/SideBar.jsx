import React from 'react'
import logo from '../Images/frame.png'
import home from '../Images/Home_fill.png'
import vector from '../Images/Vector.png'
import email from '../Images/email.png'
import send from '../Images/send.png'
import view from '../Images/view_list.png'
import inbox from '../Images/inbox.png'
import bar from '../Images/bar_chart.png'
import inbox2 from '../Images/vector2.png'
import lightM from '../Images/lightM.png'

function SideBar({dark,clicked,setClicked,picture}) {
  return (
    <div className={`w-[5vw] h-[100vh] ${dark ? "bg-[#101013]":"bg-white"} flex items-center justify-between flex-col py-[3vh]  relative top-0 left-0` }>
    <div className=""><img src={dark?logo:lightM} alt="" /></div>
    <div className="h-[65%] w-[100%] flex items-center justify-center gap-[4vh] flex-col">
        <div className="px-2 py-2 rounded-full" onMouseEnter={(e)=>{
            e.target.style.backgroundColor = "#21262A";
        }} onMouseLeave={(e)=>{
            e.target.style.backgroundColor = "transparent";
        }}><img src={home}   alt="" /></div>
        <div className="px-2 py-2 rounded-full" onMouseEnter={(e)=>{
            e.target.style.backgroundColor = "#21262A";
        }} onMouseLeave={(e)=>{
            e.target.style.backgroundColor = "transparent";
        }}><img src={vector}   alt="" /></div>
        <div className="px-2 py-2 rounded-full" onMouseEnter={(e)=>{
            e.target.style.backgroundColor = "#21262A";
        }} onMouseLeave={(e)=>{
            e.target.style.backgroundColor = "transparent";
        }}><img src={email}   alt="" /></div>
        <div className="px-2 py-2 rounded-full" onMouseEnter={(e)=>{
            e.target.style.backgroundColor = "#21262A";
        }} onMouseLeave={(e)=>{
            e.target.style.backgroundColor = "transparent";
        }}><img src={send}   alt="" /></div>
        <div className="px-2 py-2 rounded-full" onMouseEnter={(e)=>{
            e.target.style.backgroundColor = "#21262A";
        }} onMouseLeave={(e)=>{
            e.target.style.backgroundColor = "transparent";
        }}><img src={view}   alt="" /></div>
        <div className="px-2 py-2 rounded-full" onMouseEnter={(e)=>{
            e.target.style.backgroundColor = "#21262A";
        }} onMouseLeave={(e)=>{
            e.target.style.backgroundColor = "transparent";
        }} onClick={()=>{
               setClicked(true)
        }}><img src={dark ? inbox: inbox2}   alt="" /></div>
        <div className="px-2 py-2 rounded-full"onMouseEnter={(e)=>{
            e.target.style.backgroundColor = "#21262A";
        }} onMouseLeave={(e)=>{
            e.target.style.backgroundColor = "transparent";
        }}><img src={bar}   alt="" /></div>
    </div>
    <div className="h-10 w-10">
        <img src={picture} alt="" />
    </div>
<div className="absolute h-[100%] w-[0.1rem] bg-[#21262A] right-0 top-0"></div>
    </div>
  )
}

export default SideBar