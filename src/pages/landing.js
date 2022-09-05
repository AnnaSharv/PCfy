import React from 'react'
import Logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'



import Button from '@mui/material/Button';


import LandingImg from '../assets/landing-img.svg'
function landing() {
  return (
    <div className="landing-page">
        <img src={Logo} className='logo'/>
        <img src={LandingImg} className='landing-img'/>

        <div className='btn-container'>
            <Link to={"fillform"}> <Button variant="contained">ჩანაწერის დამატება</Button> </Link>
            <Link to={"recordlist"}> <Button variant="contained">ჩანაწერების სია</Button> </Link>
        </div>

    </div>
  )
}

export default landing