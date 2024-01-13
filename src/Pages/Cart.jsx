import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../Redux/cartSlice'
import Header from '../Components/Header'

function Cart() {

  const cart = useSelector(state=>state.cartReducer)
   const dispatch = useDispatch()
   const navigate = useNavigate()
  //total amount

  const [totalCartAmount,setTotalCartAmount] = useState(0)
  useEffect(()=>{
    if(cart?.length>0){
      setTotalCartAmount(  cart?.map(item=>item.totalPrice)?.reduce((p1,p2)=>p1+p2))
    } else{
      setTotalCartAmount(0)
    }
  },[cart])

    //handleCheck
    const handleCheckout = ()=>{
      alert("Order Placed Hehe")
      dispatch (emptyCart())
      navigate('/')
    }

    const handleDecrement=(product)=>{
      if(product.quantity==1){
        dispatch(removeCartItem(product.id))
      } else{
        dispatch(decQuantity(product))
      }
    }

  
  return (
    <>
    <Header/>


    <div style={{paddingTop:'100px'}}>
     {cart?.length>0? <div className='container'>
        <h2 className='text-center my-5'>Cart Summery</h2>
        <div className='row mb-5'>
          
          <div className='col-lg-8'>
            <table className='table-responsive'>

              <thead >
                <tr className='fs-5 shadow'>
                  <th><i class="fa-solid fa-sort-down"></i></th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price </th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
</thead>

<tbody>
<br />
{
cart?.map((product,index)=>(
<tr className='shadow ' key={index}>
<td className='fw-bold p-2'>{index+1}</td>
<td className='fw-bold text-primary fs-5 p-2'>{product?.title}</td>
<td className='p-2'> <img className='rounded' style={{height:"30px",width : '50px'}} src={product?.thumbnail} alt="no image" /></td>
<td className='text-success fw-bold p-4'> ${product?.totalPrice}</td>

<div className='d-flex'>
<td><button onClick={()=>dispatch(handleDecrement(product))} className=' btn btn-sm my-3 btn-danger rounded fw-bold text-light '>-</button></td>
<td  className='fw-bold fs-5 p-2 text-danger'>  {product?.quantity}</td>
<td><button onClick={()=>dispatch(incQuantity(product))} className='btn my-3 btn-success btn-sm rounded fw-bold text-light'>+</button></td> 
</div>
<td>
<td onClick={()=>dispatch(removeCartItem(product?.id))} className='p-2'><i className='fa-solid fa-lg fa-trash text-danger'></i></td>
</td>
</tr>

))
}
  
</tbody>


</table>

  <div className='float-end mt-3'>
  <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-3 bg-danger text-light'>Empty Cart</button>
  <Link to={'/'} className="btn btn-warning bg-success text-light">Shop Here</Link>
</div>

  </div>
  <div className='col-lg-4 my-5'>

<h5>Total Products : <span className='fw-bold'>{cart?.length} </span></h5>
<h5>Total Amount : <span className='fw-bold'> ${totalCartAmount} </span></h5>
<div className='d-grid'>
  <button onClick={()=>handleCheckout()} className='btn btn-success bg-success text-light fw-bold'>Checkout</button>
</div>

  </div> 
  </div>

  </div> :

<div className='text-center'>
<i class="fa-regular fa-face-frown fa-2xl"></i>

  <h2 className='my-3 text-light'>Your Cart is empty</h2>
  </div>
} 
       
  </div>
  </>
)
}


export default Cart