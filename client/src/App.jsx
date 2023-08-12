import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, FilteredProducts, Detail } from './pages'

function App() {

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
