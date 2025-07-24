import React from 'react'
import MenuItime from './MenuItime'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'

function Header() {
  return (
    <div className=' flex justify-between items-center p-3 max-w-7xl mx-auto'>

    <div className='flex gap-4 '>
        <MenuItime title="home" address="/" icon={AiFillHome} />
        <MenuItime title="about" address="/about" icon={BsFillInfoCircleFill} />
    </div>
    <div className='flex gap-1 items-center'>
      <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg  '> IMDB </span>
      <span className='text-xl hidden sm:inline '>
        clone
      </span>

    </div>


    </div>
  )
}

export default Header