import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Tooltip, Button } from "@material-tailwind/react";

const Detail = () => {

  const product = useSelector((state) => state.products.detail[0])

  const productSize = product.sizes ? product.sizes[0] : ""
  const [sizes, setSizes] = useState(productSize)
  
  const productColor = product.colors[0]
  const [colors, setColors] = useState(productColor)

  return (
    <div className='flex justify-center items-center py-10'>
      <div className='pl-44 grow-[2]'>
        <img src={product.img} alt={product.name} className='h-[850px] rounded-lg' />
      </div>
      <div className='grow-[3]'>
        <div className='max-w-lg'>
          <h5 className='text-2xl font-inter font-bold'>{product.name}</h5>
          <p className='text-orange-700 text-xl font-inter font-bold py-4'>{product.discount}</p>
          <p className='text-cyan-500 text-xl font-inter font-bold'>{product.text}</p>
          <div>
            {product.sizes
              ? <div>
                <label htmlFor="sizes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a size</label>
                <select
                  id="sizes"
                  name="sizes"
                  value={sizes}
                  onChange={(event) => setSizes(event.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                  {
                    product.sizes?.map((size, index) => {
                      return (
                        <option key={index} value={size}>{size}</option>
                      )
                    })
                  }
                </select>
              </div>
              : <div></div>
            }
          </div>
          <div className='pb-4'>
            <label htmlFor="colors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a color</label>
            <select
              id="colors"
              name="colors"
              value={colors}
              onChange={(event) => setColors(event.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              {
                product.colors.map((color, index) => {
                  return (
                    <option key={index} value={color}>{color}</option>
                  )
                })
              }
            </select>
          </div>
          <Tooltip content='Add to Cart' placement='bottom'>
            <Button color='gray' size='lg' variant='outlined' ripple={true}>Add to Cart</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )

  // const { id } = useParams()

  // return (
  //   <div>
  //     {product.filter((product) => product.id === id).map((item, index) => {
  //       return (
  //         <div key={index} className='flex justify-center items-center py-10'>
  //           <div className='pl-44 grow-[2]'>
  //             <img src={item.img} alt={item.name} className='h-[850px] rounded-lg' />
  //           </div>
  //         </div>
  //       )
  //     })}
  //   </div>

}

export default Detail