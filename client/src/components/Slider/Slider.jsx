import React from 'react'
import { nextSlide, prevSlide, dotSlide } from '../../features/slices/sliderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { sliderData } from '../../assets/data/dummyData'

const Slider = () => {

  const dispatch = useDispatch()
  const slideIndex = useSelector((state) => state.slider.value)
  console.log(slideIndex);

  return (
    <div className=''>

      <div>
        {
          sliderData.map((item, index) => {
            return (
              <div key={item.id} className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
              >

                <div>
                  {parseInt(item.id) === slideIndex && <img className='h-[850px] w-full' src={item.img} alt='shoes' />}
                </div>

                <div className='absolute top-44 mx-auto inset-x-1/4'>
                  <p className='text-white text-4xl font-inter font-bold tracking-normal leading-none'>{parseInt(item.id) === slideIndex && item.text}</p>
                </div>

              </div>
            )
          })
        }
      </div>
      <div className='flex absolute bottom-12 left-[45%]'>
        {
          sliderData.map((dot, index) => {
            return (
              <div className='mr-4' key={index}>
                <div className={index === slideIndex
                  ? 'bg-green-300 rounded-full p-4 cursor-pointer'
                  : 'bg-white rounded-full p-4 cursor-pointer'}
                  onClick={() => dispatch(dotSlide(index))}
                ></div>
              </div>
            )
          })
        }
      </div>
      <div>
        <button className='absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300' onClick={() => dispatch(nextSlide(slideIndex + 1))}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-compact-right w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11 4l3 8l-3 8"></path>
          </svg>
        </button>
        <button className='absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300' onClick={() => dispatch(prevSlide(slideIndex - 1))}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-compact-left w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M13 20l-3 -8l3 -8"></path>
          </svg>
        </button>
      </div>

    </div>
  )
}

export default Slider