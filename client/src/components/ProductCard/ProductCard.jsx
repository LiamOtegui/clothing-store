import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { productDetail } from '../../features/slices/productsSlice';

const ProductCard = ({ id, name, img, text, price, color }) => {

  const dispatch = useDispatch()
  const { type } = useParams()

  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
      <Card className="w-96" onClick={() => dispatch(productDetail(id))}>
        <CardHeader color="blue" className="relative h-96">
          <img src={img} alt="product" className='h-full w-full' />
        </CardHeader>
        <CardBody className='text-center'>
          <Typography variant="h5" className="mb-2">{name}</Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$ {price}</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {color?.map((color, index) => {
              return (
                <i className="fa-solid fa-location-dot mt-[3px] rounded-full p-2 mr-4" key={index} style={{ backgroundColor: color }}></i>
              )
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
