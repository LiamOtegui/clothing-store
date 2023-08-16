import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react"
import { Tooltip } from "@material-tailwind/react"
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../features/slices/cartSlice'

const Cart = ({ openModal, setOpen }) => {

    const cart = useSelector((state) => state.cart.cart)
    const totalPrice = useSelector((state) => state.cart.totalPrice)

    const dispatch = useDispatch()

    return (
        <>
            {
                cart.length > 0
                    ? <Dialog
                        className='border-0 outline-0'
                        open={openModal}
                        handler={() => setOpen(false)}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}
                    >
                        <DialogHeader>Shopping Cart</DialogHeader>
                        <DialogBody divider className='flex flex-col justify-center items-start'>
                            {
                                cart.map((item, index) => {
                                    const whiteText = item.color === 'Black' || item.color === 'Blue' || item.color === 'Gray' || item.color === 'Brown' || item.color === 'Green' || item.color === 'Purple'

                                    return (
                                        <div key={index}>
                                            <div className='grid grid-cols-2 py-4'>
                                                <div>
                                                    <img className='h-[125px] rounded-md' src={item.img} alt={item.name} />
                                                    <div className='flex flex-col items-start'>
                                                        <h4 className='text-black text-3xl font-inter font-bold pt-2'>{item.name}</h4>
                                                    </div>
                                                    <div className='max-w-xs'>
                                                        <p className='text-black text-xs font-inter pt-2'>{item.text}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='text-black text-sm font-inter pt-2'>
                                                        Selected Size:
                                                        <span className='ml-2'>
                                                            {item.size}
                                                        </span>
                                                    </p>
                                                    <p className='text-black text-sm font-inter pt-2'>
                                                        Selected Color:
                                                        {
                                                            !whiteText
                                                                ? <span className='ml-2 rounded-full px-2 py-1 font-raleway font-semibold' style={{ backgroundColor: item.color }}>
                                                                    {item.color}
                                                                </span>
                                                                : <span className='ml-2 rounded-full px-2 py-1 font-raleway text-white font-semibold' style={{ backgroundColor: item.color }}>
                                                                    {item.color}
                                                                </span>
                                                        }
                                                    </p>
                                                    <p className='text-black text-sm font-inter pt-2'>
                                                        Amount:
                                                        <span className='ml-2'>
                                                            {item.amount}
                                                        </span>
                                                    </p>
                                                    <p className='text-black text-sm font-inter pt-2'>
                                                        Single Item Price:
                                                        <span className='ml-2'>
                                                            ${item.price}
                                                        </span>
                                                    </p>
                                                    <p className='text-black text-sm font-inter font-bold pt-2'>
                                                        Total Price:
                                                        <span className='ml-2'>
                                                            ${item.totalPrice}
                                                        </span>
                                                    </p>
                                                    <div className='pt-4 '>
                                                        <Tooltip
                                                            content='Remove from Cart'
                                                            placement='bottom'
                                                        >
                                                            <Button
                                                                onClick={() => dispatch(removeFromCart(item))}
                                                                size='sm'
                                                                color='red'
                                                                ripple={true}
                                                                variant='filled'
                                                                >
                                                                Remove
                                                            </Button>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </DialogBody>
                        <DialogFooter className='flex justify-start items-center'>
                            <p className='text-black text-sm font-inter font-bold pt-2'>
                                Total Price of All Products:
                                <span className='ml-2'>
                                    ${totalPrice}
                                </span>
                            </p>
                        </DialogFooter>
                    </Dialog>
                    : <Dialog
                        className='border-0 outline-0'
                        open={openModal}
                        handler={() => setOpen(false)}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}
                    >
                        <DialogHeader>Shopping Cart</DialogHeader>
                        <DialogBody divider>
                            <div>
                                <h1 className='text-black text-3xl font-inter font-bold py-4'>Your cart is empty!</h1>
                                <p className='text-black font-inter'>Add some products</p>
                            </div>
                        </DialogBody>
                        {/* <DialogFooter>
                </DialogFooter> */}
                    </Dialog>
            }
        </>
    )
}

export default Cart
