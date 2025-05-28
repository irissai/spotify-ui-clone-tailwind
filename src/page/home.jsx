import React from 'react'
import HomeLeft from '../components/home/homeLeft'
import HomeRight from '../components/home/homeRight'
import HomeBottom from '../components/home/homeBottom'


function home() {
  return (
   <div className="grid text-[#fff] h-screen w-full relative p-[8px] gap-[8px] bg-black grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto]">
           <HomeLeft/>
            <HomeRight/>
            <HomeBottom/>
            
        </div>
  )
}

export default home