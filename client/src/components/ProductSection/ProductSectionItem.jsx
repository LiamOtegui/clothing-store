import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react"
import { Button } from "@material-tailwind/react"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/slices/cartSlice'

const ProductSectionItem = ({ id, img, name, text, size, price, color, totalPrice }) => {

  const dispatch = useDispatch()

  const defaultSize = size[0]
  const defaultColor = color[0]
  const whiteText = defaultColor === 'Black' || defaultColor === 'Blue' || defaultColor === 'Gray' || defaultColor === 'Brown' || defaultColor === 'Green' || defaultColor === 'Purple'

  return (
    <div>
      <Card className="w-96">

        <Typography variant="h4" className="absolute rotate-45 z-10 right-[0.9rem] top-[2.7rem] text-[1.5rem] text-red-600 mb-2">
          SALE%
        </Typography>

        <CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>

        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>

          <div className='flex justify-between items-center pt-4'>
            <Typography color="gray" className="font-medium text-red-300" textGradient>
              Sizes left: <span className='text-gray-500' >
                    {defaultSize}
                  </span>
            </Typography>
            {
              whiteText
                ? <Typography color="gray" className="font-medium" textGradient>
                  Color: <span className='px-2 py-1 rounded-full ml-2 text-white' style={{ backgroundColor: defaultColor }}>
                    {defaultColor}
                  </span>
                </Typography>
                : <Typography color="gray" className="font-medium" textGradient>
                  Color: <span className='px-2 py-1 rounded-full ml-2' style={{ backgroundColor: defaultColor }}>
                    {defaultColor}
                  </span>
                </Typography>
            }
          </div>
        </CardBody>

        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content='Add to Cart' placement='bottom'>
            <Button onClick={() => dispatch(addToCart({
              id: id,
              img: img,
              text: text,
              amount: 1,
              price: price,
              totalPrice: totalPrice,
              name: name,
              size: defaultSize,
              color: defaultColor,
            }))} size='lg' color='gray' variant='outlined' ripple={true}>Add to Cart</Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProductSectionItem
