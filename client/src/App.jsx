import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, FilteredProducts, Detail } from './pages'
import { useSelector } from 'react-redux'

function App() {

  const cart = useSelector((state) => state.cart.cart)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  console.log('cart', cart);
  console.log('totalAmount', totalAmount);
  console.log('totalPrice', totalPrice);

  return (
    <>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/filteredProducts/:type' element={<FilteredProducts />} />
          <Route path='/filteredProducts/:type/:id' element={<Detail />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
