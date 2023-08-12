import React from 'react'
import { Button } from "@material-tailwind/react"
import clothes from '../../assets/images/clothes.jpg'
import { filterProducts } from '../../features/slices/productsSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const NavigateButtons = () => {

  const buttons = ['Hoodies', 'Dresses', 'Suits', 'Shoes', 'T-Shirts', 'Jeans', 'Jackets', 'Bags']

  const dispatch = useDispatch()

  return (
    <div>
      <div className='flex items-center justify-center py-8'>
        {buttons.map((button, index) => {
          return (
            <div key={index} className='mr-4'>
              <Link to={`/filteredProducts/${button}`}>
                <Button size='lg' variant='outlined' className='text-brown-700 border-brown-700 hover:bg-gray-200 hover:text-black hover:border-brown-900 duration-300 ease-in-out' onClick={() => dispatch(filterProducts(button))}>{button}</Button>
              </Link>
            </div>
          )
        })}
      </div>
      <div className='bg-black p-2 w-[55%] mx-auto rounded-md'>
        <h3 className='text-white text-center text-lg font-inter font-bold tracking-normal leading-none'>SALES UP TO 50%</h3>
      </div>
      <div className='flex justify-center items-center py-4'>
        <img className='rounded-md p-2 h-[600px] w-[70%] shadow-lg shadow-gray-600' src={clothes} alt='clothes' />
      </div>
    </div>
  )
}

export default NavigateButtons
