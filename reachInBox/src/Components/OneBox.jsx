import React from 'react'
import { useState } from 'react'
import SideBar from './SideBar';
import Header from './Header';
import Center from './Center';

function OneBox({picture}) {
    const [isDark,setDark] = useState(true);
    const [clicked, setClicked] = useState(false);
  return (
    <div className={`h-[100vh] w-[100vw] ${isDark ? "bg-black":"bg-white relative"}`}>
        <SideBar dark = {isDark} clicked={clicked} setClicked = {setClicked} picture={picture}/>
        <Header dark = {isDark} setDark={setDark}/>
        <Center dark={isDark} clicked={clicked}/>
    </div>
  )
}

export default OneBox