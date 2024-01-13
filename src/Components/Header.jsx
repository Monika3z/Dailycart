import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchByProduct } from '../Redux/productSlice';

function Header({insideHome}) {

const wishlist = useSelector(state=>state.wishlistReducer)
const cart = useSelector(state=>state.cartReducer)
const dispatch = useDispatch()
return (
  <div>
    <Navbar style={{zIndex:2}} expand="lg" className="bg-primary position-fixed fw-bold w-100">
      <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',fontSize:'40px'}}className='text-dark fw-bold'><i class="fa-solid fa-truck-field me-2 text-light"></i>Daily Cart</Link></Navbar.Brand>
      <Navbar.Toggle className='text-light bg-light' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto fs-5">

{ insideHome&&
  <Nav.Link>
  <input placeholder='Search...' onChange={e=>dispatch(searchByProduct(e.target.value.toLowerCase()))} className='form-control ' type="text" />
  </Nav.Link>
}
  
      <Nav.Link >  <Link to={'/wishlist'} style={{textDecoration:'none' , color:'white'}}><i style={{color:'red'}} class="fa-solid fa-heart fa-lg me-2"></i>Wishlist <Badge className="bg-warning rounded" >{wishlist?.length}</Badge> </Link> </Nav.Link>
      <Nav.Link > <Link to={'/cart'}style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-cart-shopping me-2"></i>Cart <Badge className="bg-danger rounded" >{cart?.length}</Badge> </Link> </Nav.Link>
      </Nav>
      </Navbar.Collapse> 
      </Container>
    </Navbar>

    </div>
  )
}

export default Header



































