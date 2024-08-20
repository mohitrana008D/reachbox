import React, { useEffect } from 'react'
import image from '../Images/image.png'
import axios from 'axios'
import { useState } from 'react';
import SideCenter from './SideCenter';
import TopCenter from './TopCenter';
import RightCenter from './RightCenter';
import CenterCenter from './CenterCenter';
import Delete from './Delete';
import Reply from './Reply';

function Center({dark, clicked}) {
  const [data, setData] = useState([]);
  const[curr,setCurr] = useState(null);
  const [deleted,setDelete] = useState(false);
  const [reply,setReply] = useState(false);
  useEffect(()=>{
   if(!deleted && !reply){
    document.addEventListener('keydown', keyDown, true);
   }
  },[])
  function keyDown(e){
   if(e.key === 'd'|| e.key === 'D'){
    alert('delete command activated')
    setDelete(true)
   }
    if(e.key === 'R' || e.key === 'r'){
    alert('reply command activated')
    setReply(true)
   }
  }


  useEffect(() => {
    async function call() {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoia3VtYXJhdmluYXNoNzgxNDRAZ21haWwuY29tIiwiaWQiOjEwNDEsImZpcnN0TmFtZSI6IkF2aW5hc2giLCJsYXN0TmFtZSI6Ikt1bWFyIn0sImlhdCI6MTcyMzcyMzQ2MCwiZXhwIjoxNzU1MjU5NDYwfQ.VEYqK5gDIcTX_lV-TDXJ9Qr25uWpiVOby1U8b-Ukto4"
      await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res)=>{
        setData(res.data.data)
        setCurr(res.data.data[0])
      });
    }
    call();
  }, []);
  return (
    <div className={`absolute top-[5vw] left-[5vw] w-[95vw] h-[89vh] flex items-center justify-center   `}>
      <Reply reply={reply} setReply={setReply} data={data} setData={setData}/>
      <Delete deleted={deleted} setDelete={setDelete} setData={setData} data={data}/>
<div className={`flex items-center justify-center flex-col ${clicked ? "hidden":"flex"}`}>
<img src={image} alt="" />
<h1 className={`${dark ? "text-white":"text-black"} my-8 text-2xl font-semibold font-sans tracking-wide`}>It's a beginning of a legendary sales pipeline</h1>
<h1 className={`${dark ? "text-white":"text-black"} opacity-75 text-lg mb-3`}>When you have inbound E-mails</h1>
<h1 className={`${dark ? "text-white":"text-black"} opacity-75 text-lg`}>you'll see them here</h1>

</div>
<div className={`${clicked ? "block":"hidden"} h-[100%] w-[100%] relative `}>
<SideCenter dark={dark} data = {data} curr={curr} setCurr={setCurr}/>
<RightCenter dark={dark}/>
<TopCenter dark={dark}/>
<CenterCenter dark={dark} data={data} currFirst={curr} setReply={setReply}/>

</div>

    </div>
  )
}

export default Center