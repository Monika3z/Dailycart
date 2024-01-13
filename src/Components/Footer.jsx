import React from 'react'
import { Button } from 'react-bootstrap'


function Footer() {
  return (

  <div className='bg-primary text-light' style={{ padding: '20px ', textAlign: 'center' }}>
  <div>
  <h3 className='fw-bold mb-4 text-dark'>  <i class="fa-solid fa-truck-field me-1"></i> Daily Cart </h3>
  </div>

  <h5>About Us</h5>
  <p className='text-dark' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate doloremque commodi 
  perspiciatis necessitatibus fugiat vitae consequatur, nam aliquid velit voluptates aperiam odio repellendus reprehenderit optio blanditiis, eligendi esse veritatis accusantium.</p>
  <div>
 
<div className="d-flex flex-column align-items-center justify-content-center">
<h5 >
  Contact US</h5>
  <input className='form-control my-2 w-25 h-25'   placeholder='Enter your email address' />
  <Button className='bg-dark'>Send</Button>

</div>
      <p className='my-3 '>2024ReactProject ©Monika
      <p>
      <i class="fa-brands fa-twitter me-2 text-dark"></i>
      <i class="fa-brands fa-github me-2 text-dark"></i>
      <i class="fa-brands fa-reddit me-2 text-dark"></i>
      </p>

      <p>
      <a className='text-dark' href="#" style={{  textDecoration: 'none', marginLeft: '10px', marginRight: '10px' }}>
      Terms of Service
      </a>
      <a className='text-dark' href="#" style={{  textDecoration: 'none', marginLeft: '10px', marginRight: '10px' }}>
      Privacy Policy
      </a>
      <a className='text-dark' href="#" style={{  textDecoration: 'none', marginLeft: '10px', marginRight: '10px' }}>
      Contact Us
      </a>
      </p>
    </p>
    </div>
    </div>

  )
}

export default Footer