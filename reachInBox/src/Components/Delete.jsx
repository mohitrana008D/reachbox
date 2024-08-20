import React from 'react'

function Delete({deleted,setDelete,setData,data}) {
  return (
    <div className={`h-[100%] w-[100%] bg-[#424141] opacity-95 z-[99] absolute  items-center justify-center ${deleted?"flex":"hidden"}` }>
        <div className=" bg-[#000000] h-[30vh] w-[30vw] z-[9999] opacity-100 px-2 py-2">
            <h1 className='text-white text-2xl font-normal text-center my-2'>Are you sure</h1>
            <h1 className='text-white text-sm font-normal text-center my-2 opacity-60'>your selected email will be deleted.</h1>
            <div className="w-[100%] flex items-center justify-center gap-3">
                <div className="bg-[#25262B] px-3 py-2 cursor-pointer" onClick={()=>{
                    setDelete(false)
                }}>Cancel</div>
                <div className="bg-red-500 px-3 py-2 cursor-pointer" onClick={()=>{
                    let arr = data.filter((data,i)=>i!=0)
                    setData(arr);
                    setDelete(false)
                }}>Delete</div>
            </div>
        </div>
    </div>
  )
}

export default Delete