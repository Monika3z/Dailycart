import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { removeFromWishlist } from '../Redux/wishlistSlice';
import { addToCart } from '../Redux/cartSlice';
import Header from '../Components/Header';


addToCart
function Wishlist() {
//get wishlist from store

const wishlist = useSelector(state=>state.wishlistReducer)
const dispatch = useDispatch()
console.log(wishlist);

// cart
const handleCart = (product)=>{
  // dispatch(removeFromWishlist(product.id))
  dispatch(addToCart(product))
}

  return (

    <>
    <Header/>

    <div style={{paddingTop:'100px'}}>
    <div className='container'>

<Row className=" my-5">

 { wishlist?.length>0?wishlist.map(product=>(
  
 
 
 <Col sm={12} md={6} lg={4} xl={3}>

  <Card className='shadow rounded' style={{ width: '18rem' }}>
  <Card.Img className='rounded p-2' height='200px' variant="top" src={product?.thumbnail} />
  <Card.Body>
  <Card.Title className='fw-bold text-center text-white'>{product?.title.slice(0,20)}...</Card.Title>

  <div className='d-flex justify-content-between'>
  <Button onClick={()=>dispatch(removeFromWishlist(product?.id))} variant="danger"><i className='fa-solid fa-heart-circle-minus text-white'></i></Button>
  <Button onClick={()=>handleCart(product)}  variant="success"><i className='fa-solid fa-cart-plus text-white'></i></Button>
  </div>
  </Card.Body>
  </Card>
  </Col> )) :

<div className='text-center'>
<i class="fa-regular fa-face-frown fa-2xl"></i>
<h2 className='my-3 text-dark'>Your Wishlist is empty</h2>
</div>
} 
</Row>
</div>
</div>
</> 
)
}

export default Wishlist