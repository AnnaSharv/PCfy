import React from 'react'
import { useNavigate } from "react-router-dom";

import Arrow from '../assets/Vector.svg'



function GoBackBtn() {
  let navigate = useNavigate()

  const goBack = () => {navigate(-1)}

  return (
    <button className='goback position-relative gobacklist' > 
        <img src={Arrow} alt="arrow" onClick={goBack}/> 
      </button>
  )
}

export default GoBackBtn