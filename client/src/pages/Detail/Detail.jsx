import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Tooltip, Button } from "@material-tailwind/react"
import { addToCart } from '../../features/slices/cartSlice'

const Detail = () => {

  const product = useSelector((state) => state.products.detail)

  const { id } = useParams()

  const productSize = product[0].size ? product[0].size[0] : ""
  const [size, setSize] = useState(productSize)

  const productColor = product[0].color[0]
  const [color, setColor] = useState(productColor)

  const dispatch = useDispatch()

  return (

    <div>
      {product.filter((product) => product.id === id).map((item, index) => {
        return (
          <div key={index} className='flex justify-center items-center py-10'>
            <div className='pl-44 grow-[2]'>
              <img className='h-[850px] rounded-lg' src={item.img} alt={item.name} />
            </div>

            <div className='grow-[3]'>
              <div className='max-w-lg'>
                <h5 className='text-2xl font-inter font-bold'>{item.name}</h5>
                <p className='text-orange-700 text-xl font-inter font-bold py-4'>{item.discount}</p>
                <p className='text-cyan-500 text-xl font-inter font-bold'>{item.text}</p>

                <div className='pb-4'>
                  {item.size
                    ? (
                      <div>
                        <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a size</label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(event) => setSize(event.target.value)}
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                          {
                            item.size?.map((size, index) => {
                              return (
                                <option key={index} value={size}>{size}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a size</label>
                        <select
                          id="size"
                          disabled={true}
                          name="size"
                          value={size}
                          onChange={(event) => setSize(event.target.value)}
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                          {
                            item?.size?.map((size, index) => {
                              return (
                                <option key={index} value={size}>{size}</option>
                              )
                            })}
                        </select>
                      </div>
                    )}
                </div>

                <div className='pb-4'>
                  <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a color</label>
                  <select
                    id="color"
                    name="color"
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    {
                      item.color.map((color, index) => {
                        return (
                          <option key={index} value={color}>{color}</option>
                        )
                      })}
                  </select>
                </div>

                <Tooltip content='Add to Cart' placement='bottom'>
                  <Button color='gray' size='lg' variant='outlined' ripple={true} onClick={
                    () => dispatch(
                      addToCart({
                        id: item.id,
                        name: item.name,
                        img: item.img,
                        text: item.text,
                        size: size,
                        color: color,
                        price: item.price,
                        amount: 1,
                        totalPrice: item.price,
                      }))}>Add to Cart</Button>
                </Tooltip>

              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}

export default Detail