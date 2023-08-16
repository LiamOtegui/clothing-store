import React from 'react'
import { storeData } from '../../assets/data/dummyData'
import ProductSectionItem from './ProductSectionItem'

const ProductSection = () => {
  return (
    <>
      <div className='bg-black p-2 w-[50%] mx-auto rounded-md'>
        <h2 className='text-red-600 text-center text-lg font-inter font-bold'>
            SUMMER T-Shirt SALE
        </h2>
      </div>
      <div className='grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl'>
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
              id={product.id}
              name={product.name}
              img={product.img}
              text={product.text}
              price={product.price}
              color={product.color}
              size={product.size}
              totalPrice={product.totalPrice} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProductSection
