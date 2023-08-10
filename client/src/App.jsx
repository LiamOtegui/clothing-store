import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, FilteredProducts } from './pages'

function App() {

  return (
    <>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/filteredProducts/:type' element={<FilteredProducts />} />
        </Routes>
      </div>
    </>
  )
}

export default App
