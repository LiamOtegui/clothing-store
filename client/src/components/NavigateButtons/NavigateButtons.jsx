import React from 'react'
import { Button } from "@material-tailwind/react"
import clothes from '../../assets/images/clothes.jpg'

const NavigateButtons = () => {

  const buttons = ['Hoodies', 'Dresses', 'Suits', 'Shoes', 'T-shirts', 'Jeans', 'Jackets', 'Bags']

  return (
    <div>
      <div className='flex items-center justify-center py-8'>
        {buttons.map((button, index) => {
          return (
            <div key={index} className='mr-4'>
              <Button color='gray' size='lg' variant='outlined' className='hover:bg-green-300 duration-300 ease-in-out'>{button}</Button>
            </div>
          )
        })}
      </div>
      <div className='bg-green-300 p-2 w-[55%] mx-auto rounded-md'>
        <h3 className='text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none'>SALES UP TO 50%</h3>
      </div>
      <div className='flex justify-center items-center py-4'>
        <img className='rounded-md p-2 h-[600px] w-[70%] shadow-lg shadow-gray-600' src={clothes} alt='clothes'/>
      </div>
    </div>
  )
}

export default NavigateButtons
