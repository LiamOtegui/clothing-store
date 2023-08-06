import React from 'react'
import logo from '../../assets/images/logo-clothing-store.png'

const NavBar = () => {
    return (
        <>
            <div>
                <div className='bg-black p-2 w-full'>
                    <h3 className='flex justify-center text-white font-playfairDisplay text-[2rem] font-semibold leading-none'>Welcome</h3>
                </div>
            </div>

            <div className='flex justify-around items-center'>
                <div>
                    <img className='w-[7rem]' src={logo} alt="store" />
                </div>

                <div className='flex flex-row items-center'>
                    <button className='font-raleway text-black font-medium leading-none text-center mr-[1.3rem]'>Logout</button>

                    <div className='flex flex-row items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                        </svg>
                        <p className='font-raleway font-medium ml-[0.2rem]'>Wish List</p>
                    </div>

                    <div className='flex flex-row items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-[1.3rem] mb-[0.1rem]" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
                            <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                        </svg>
                        <p className='font-raleway font-medium ml-[0.2rem]'>Cart</p>
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
