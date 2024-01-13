import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/wishlistSlice'
import { Badge } from 'react-bootstrap'
import { addToCart } from '../Redux/cartSlice'
import Header from '../Components/Header'


function View() { 
const {id} = useParams()
 console.log(id);
 const [product,setProduct]= useState({})
 const wishlist = useSelector(state=>state.wishlistReducer)
 const dispatch = useDispatch()

useEffect(()=>{
const allProduct = JSON.parse(sessionStorage.getItem("allProducts"))
setProduct(allProduct?.find(item=>item.id==id))

},[])
console.log(wishlist);

const handleWishlist = (product)=>{
  const existingproduct  = wishlist?.find(item=>item.id==product.id)
  if (existingproduct){
    alert("product already exist")

  } else{

    dispatch (addToWishlist(product))
  }
}

  return (
    <>
    <Header/>

    <div style={{paddingTop:"100px"}}>
    <div className='container mt-5 mb-5'>
    <div className='row align-items-center'>
    <div className='col-lg-1'></div>
    <div className='col lg-4 '> 
    <img height={"300px"} className='img-fluid rounded shadow' src={product?.thumbnail} alt="" />

</div> 

<div className='col lg-1'></div>
<div className='col lg-6  '>
 <span className='fs-5'> <Badge> PID: {product?.id} </Badge></span>

 <h1 className='rounded shadow p-3 my-2'>{product.title}</h1>

 <h5 className='fw-bold p-3'>${product?.price}</h5>
 <p><i class="fa-solid fa-quote-left"></i> Description : {product?.description} <i class="fa-solid fa-quote-right"></i> </p>

 <div className='d-flex justify-content-between mt-5'>

  <button onClick={()=>handleWishlist(product)}className='btn btn-danger '><i style={{color:'white'}} className='fa-solid fa-heart fa-lg  me-2'></i>Add to wishlist</button>
  <button onClick={()=>dispatch(addToCart(product))} className='btn btn-success'> <i style={{color:'white'}} className='fa-solid fa-cart-plus fa-lg me-2'></i> Add to cart</button>
</div>

</div>
</div>

  </div>

  </div>
  </>

)
}

export default View