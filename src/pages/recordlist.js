import React, {useEffect, useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Arrow from '../assets/Vector.svg'


function recordlist() {
  let navigate = useNavigate()
  const [recordlist, setRecordList] = useState([])
  let token = "5b82dd95e9242fd358e426ebfdfc3315"



  useEffect(() => {
    fetch(`https://pcfy.redberryinternship.ge/api/laptops?token=${token}`)
    .then(res => res.json())
    .then(res => setRecordList(res.data))

  }, [])
  

  
  const goBack = () => {navigate(-1)}
  return (
    <div>
        <button className='goback position-relative gobacklist' onClick={goBack}> 
          <img src={Arrow} alt="arrow" /> 
        </button>

        <h1 className='recordlist-title'>ჩანაწერების სია</h1>
      {
        recordlist.length !== 0 ?
        <Row xs={1} md={2} className="g-4 card-row">
          {recordlist.map((record,i) => {
            return  <Col key={i} className="p-0" >
                      <Card className="recordlist_card flex-row align-items-center">
                        <Card.Img variant="top" className="record-img" src={"https://pcfy.redberryinternship.ge/" + record.laptop.image} />
                        <Card.Body>
                          <Card.Title>
                            {record.user.name} { record.user.surname}
                          </Card.Title>
                          <Card.Text>
                            hi
                          </Card.Text>
                          <Link to={`id=${record.laptop.id}`}>
                            <button className='seemore'>
                                მეტის ნახვა
                            </button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
        })}
        </Row>
         :
        <h1>ჩანაწერების სია ცარიელია </h1>
      }



{/* testt */}
{/* <Row xs={1} md={2} lg={2} className="g-4 card-row">
   <Col  className="p-0">
          <Card className="recordlist_card flex-row align-items-center">
            <Card.Img variant="top" className="record-img" src={Arrow} />
            <Card.Body>
              <Card.Title>
                ანა შარვაძე
              </Card.Title>
              <Card.Text>
                hi
              </Card.Text>
              <Link to={`id=2514}`}>
                <button className='seemore'>
                    მეტის ნახვა
                </button>
              </Link>
            </Card.Body>
          </Card>
    </Col>
    <Col  className="p-0" >
      <Card className="recordlist_card flex-row align-items-center">
        <Card.Img variant="top" className="record-img" src={Arrow} />
        <Card.Body>
          <Card.Title>
            ანა შარვაძე
          </Card.Title>
          <Card.Text>
            hi
          </Card.Text>
          <Link to={`id=2514}`}>
            <button className='seemore'>
                მეტის ნახვა
            </button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
</Row> */}
       

    </div>
  )
}

export default recordlist