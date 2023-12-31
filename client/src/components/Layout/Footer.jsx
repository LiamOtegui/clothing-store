import React from 'react'
import logo from '../../assets/images/logo.png'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <div>
      <div className='flex items-center justify-center'>
        <hr className='h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none' />
      </div>
      <div className='flex items-center justify-around pt-4'>
        <div>
          <p className='text-sm font-inter'>Clothing Store © {year} made by Liam Otegui</p>
        </div>
        <div>
          <img className='h-24' src={logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Footer
