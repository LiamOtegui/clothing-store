import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import Cart from '../Cart/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar } from "@material-tailwind/react"
import { Tooltip, Button } from "@material-tailwind/react"
import { logout } from '../../features/slices/authSlice'

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    };

    const totalAmount = useSelector((state) => state.cart.totalAmount)

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    const { name, image } = user

    return (
        <>
            <div>
                <div className='bg-black p-2 w-full'>
                    <h3 className='flex justify-center text-white font-raleway text-[2rem] font-semibold leading-none'>Welcome</h3>
                </div>
            </div>

            <div className='flex justify-around items-center'>
                <div>
                    <img className='w-[8rem]' src={logo} alt="store" />
                </div>

                <div className='flex flex-row items-center text-lg'>

                    {/* <div className='flex flex-row items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                        </svg>
                        <p className='font-raleway font-medium ml-[0.2rem] mr-[0.8rem]'>Wish List</p>
                    </div> */}

                    <div className='flex flex-row items-center cursor-pointer' onClick={handleOpen}>
                        {
                            totalAmount > 0
                                ? <span className='rounded-full bg-gray-300 px-2 font-inter text-sm ml-3 mr-0.5'>{totalAmount}</span>
                                : <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-[1.3rem] mb-[0.1rem]" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
                                    <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                                </svg>
                        }

                        <p className='font-raleway font-medium ml-[0.2rem]'>Cart</p>
                        <div>
                            {
                                open && <Cart openModal={open} setOpen={setOpen} />
                            }
                        </div>
                    </div>
                    <div className='flex mt-1'>
                        <div className='flex flex-row items-center cursor-pointer pl-4 ml-[1.1rem]'>
                            {image && <Avatar src={image} alt='avatar' size='sm' className='mr-2' />}
                        </div>
                        <div className='flex mt-[0.1rem]'>
                            <Tooltip content='Sign out? Click!'>
                                <p className='font-raleway text-m font-medium' onClick={() => dispatch(logout())}>
                                    Hi {name.charAt(0).toUpperCase() + name.slice(1)}!
                                </p>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex bg-black p-4 w-full justify-around'>
                <div className='text-white font-inter font-medium ml-[0.2rem] text-center leading-none'>50% OFF</div>
                <div className='text-white font-inter font-medium ml-[0.2rem] text-center leading-none'>Free shipping</div>
                <div className='text-white font-inter font-medium ml-[0.2rem] text-center leading-none'>Different payment methods</div>
            </div>
        </>
    )
}

export default NavBar
