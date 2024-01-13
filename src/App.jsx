import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './Pages/Wishlist'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import View from './Pages/View'
import Footer from './Components/Footer'


function App() {

return ( 
  
     <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>} />
     </Routes>
     <Footer/>
     </div>
)
}

export default App
