import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Confetti from '../assets/confetti.svg'

function Success() {
  return (
    <div className='success'>
      <div className='success-modal'>
          <img src={Confetti} alt="confetti "/>

          <h1>ჩანაწერი დამატებულია!</h1>
          <Link to={"/recordlist"}>
          <Button variant="primary" className={"d-block  me-auto d-flex btnreverse"}> 
              სიაში გადაყვანა
          </Button>
          </Link>

          <Link to={"/"}>
             <Button variant="primary" className={"d-block btnnext me-auto d-flex"}> 
              მთავარი
          </Button>
          </Link>
         
      </div>
    </div>
  )
}

export default Success