import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, FilteredProducts, Detail, Login } from './pages'
import { useSelector } from 'react-redux'

function App() {

  const user = useSelector((state) => state.user.user)
  const { authUser } = user

  // What is left to do?:
  //   - Slider/Carrousel automatically moves to one side
  //   - Button size for Shoes in FilteredProducts
  //   - Wishlist
  //   - Payment with Stripe.
  //   - Button to go back to Home when I'm in the filtered products

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Login />} />
          <Route path='/filteredProducts/:type' element={<FilteredProducts />} />
          <Route path='/filteredProducts/:type/:id' element={<Detail />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
