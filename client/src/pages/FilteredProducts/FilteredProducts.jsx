import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components'
import { Button } from "@material-tailwind/react"
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react"
import { filterProducts, filterByGender, sortByPrice, filterByColor, filterBySize } from '../../features/slices/productsSlice'
import Error from '../../components/Error/Error'

const FilteredProducts = () => {

  const products = useSelector((state) => state.products.filteredProducts)

  const { type } = useParams()

  const genderButtons = ["male", "female"]
  const colorButtons = ["Red", "Green", "Purple", "Yellow", "Orange", "Blue", "Black", "Brown"]
  const sizeButtons = ["S", "M", "L", "XL"]
  // const shoesSize = ["36", "38", "40", "42", "44", "46"]

  const dispatch = useDispatch()
  const error = useSelector((state) => state.products.error)

  return (
    <div>
      <div className='pt-16'>
        <div className='pl-14'>
          <h1 className='text-4xl font-inter text-gray-600 font-bold leading-none'>
            {type}
          </h1>
          <div className='flex items-center justify-between py-8'>
            <div className='flex items-center'>
              {
                genderButtons.map((gender, index) => {
                  return (
                    <div key={index}>
                      <Button color='gray' size='lg' variant='outlined' className='text-black hover:bg-gray-100 duration-300 ease-in-out mr-4' onClick={() => dispatch(filterByGender(gender))}>{gender}</Button>
                    </div>
                  )
                })}
              <Button color='gray' size='lg' variant='outlined' className='text-black hover:bg-gray-100 duration-300 ease-in-out mr-4' onClick={() => dispatch(sortByPrice())}>High Price</Button>
              <Menu>
                <MenuHandler>
                  <Button color='gray' size='lg' variant='outlined' className='text-black hover:bg-gray-100 duration-300 ease-in-out mr-4'>Select a Color</Button>
                </MenuHandler>
                <MenuList>
                  {
                    colorButtons.map((color, index) => {
                      return (
                        <MenuItem style={{ color: color }} key={index} onClick={() => dispatch(filterByColor(color))}>{color}</MenuItem>
                      )
                    })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button color='gray' size='lg' variant='outlined' className='text-black hover:bg-gray-100 duration-300 ease-in-out mr-4' disabled={type === "Bags" || type === "Shoes"}>Select a Size</Button>
                </MenuHandler>
                <MenuList>
                  {
                    sizeButtons.map((size, index) => {
                      return (
                        <MenuItem key={index} onClick={() => dispatch(filterBySize(size))}>{size}</MenuItem>
                      )
                    })}
                </MenuList>
              </Menu>
            </div>
            <div className='pr-14'>
              <Button color='gray' size='lg' variant='outlined' className='text-black hover:bg-gray-100 duration-300 ease-in-out mr-4' onClick={() => dispatch(filterProducts(type))}>Clear Filter</Button>
            </div>
          </div>
        </div>
        {
          error
            ? ( <Error /> )
            : <div className='grid grid-cols-4 justify-items-center py-8 gap-12'>
              {products.filter((product) => product.type === type).map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      color={product.color}
                    />
                  </div>
                )
              })}
            </div>
        }
      </div>
    </div>
  )
}

export default FilteredProducts