import React from 'react'
import Message from './Message'
import reply from '../Images/reply.png'

function CenterCenter({dark,data,currFirst,setReply}) {
  return (
    <div className={`absolute left-[20%] top-[5vw] w-[60%] h-[80vh]  flex items-center justify-center px-3 py-1  flex-col`}>
     {data.map((item, i) =>   <Message dark={dark}  data={data} subject={item.subject} from={item.fromEmail} to={item.toEmail} body={item.body} key={item.id} />)}
        <img src={reply} alt="" className='absolute bottom-[5vh] left-[2vh]' onClick={()=>{
            setReply(true)
        }} />
    </div>
  )
}

export default CenterCenter