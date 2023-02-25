import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  function pathMathRoute(route){
    if(route === location.pathname){
    return true
  }
}
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-4 max-w-6xl mx-auto'>
        <div >
        <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='Logo' className='h-5 cursor-pointer' 
        onClick={()=> navigate("/")} />
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
            ${pathMathRoute("/") && "text-black border-b-rose-500"} `} onClick={()=> navigate("/")}>Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
            ${pathMathRoute("/offer") && "text-black border-b-rose-500"} `} onClick={()=> navigate("/offer")}>Offer</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
            ${pathMathRoute("/signin") && "text-black border-b-rose-500"} `} onClick={()=> navigate("/signin")}>Log in</li>
          </ul>
        </div>
      </header>
    </div>
  )
}


