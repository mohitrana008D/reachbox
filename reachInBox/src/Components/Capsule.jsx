import React from 'react'

function Capsule({dark, content}) {
  return (
    <div className={`${dark ? "bg-[#222426] text-white":"bg-[#F0F0F0] text-black"}  rounded-xl px-3 py-1 `}>{content}</div>
  )
}

export default Capsule