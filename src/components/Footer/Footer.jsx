import React from 'react';

const Footer  = () => {
    
    const Dates = new Date().getFullYear();

    return(
              
      <div className='copyrightText' >
      <p style={{color:"black"}}>&#169; Copyright { Dates} <a href="https://github.com/himanshu-hota" target='blank' >Himanshu Hota</a> All Right Reserved</p>
              
    </div>

    )
}

export default Footer ;