import React, {useEffect, useState, useContext} from 'react'
import {useLocation} from 'react-router-dom'
import {Context} from '../Datacontext'
import {ContextTeamPosition} from '../Datacontext'



import Goback from '../components/GoBackBtn'

//import Arrow from '../assets/Vector.svg'

function recordDetail() {
    let location = useLocation()
    let token = "3ebff5ab018b0675ff671820082b2cb7"
    let id = location.pathname.split("id=")[1]

    let [ laptopDetails, setlaptopDetails ] = useState([])
    // const [team, setteam] = useState("")
    let [ position, setposition ] = useState([])
    const teamsContext = useContext(Context);
    const tp = useContext(ContextTeamPosition);
  let myteam = ''
  let myposition = ''
 
    useEffect(() => {
      fetch(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${token}`)
      .then(data => data.json())
      .then(res => setlaptopDetails(res.data))




      fetch('https://pcfy.redberryinternship.ge/api/positions')
      .then(res => res.json())
      .then(res => setposition(res.data))
    }, [])
    

    
    
  return (
    <>

      <Goback />

      <h1 className='detailspage-title'>ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</h1>

        {
            laptopDetails.length !== 0 ? 
            <div className="infocontainer">

              <div className='info info-row info-1'>
                 <img src={"https://pcfy.redberryinternship.ge/" + laptopDetails.laptop.image}  alt="laptop_img" className='laptopimg'/>


                <div >

                  <div className='info d-flex'>
                    <div>
                    <div>სახელი:</div>
                    <div>თიმი:</div>
                    <div>პოზიცია:</div>
                    <div>მეილი:</div>
                    <div>ტელ. ნომერი:</div>
                  </div>

                  <div className=''>
                    <div className='a'> 
                        {laptopDetails.user.name} {laptopDetails.user.surname} 
                    </div>
                   
                    <div> {
                        
                        teamsContext.filter((t,i) => {
                          if( t.id === laptopDetails.user.team_id ) {
                            myteam = t.name
                          }
                        })
                      }  
                            {myteam}
                      </div>
                    <div>
                      {
                        
                        position.filter((p,i) => {
                        
                          if( p.id === laptopDetails.user.position_id ) {
                            myposition = p.name
                          }
                        })
                        
                      } 

                      {myposition}
                    </div>
                    <div>{laptopDetails.user.email}</div>
                    <div>{laptopDetails.user.phone_number}</div>
                  </div>
                  </div>
              </div>
               





                 
                  
                </div>


                <div className='info info-row info-2'>

                  <div>
                      <div>
                        <div> ლეპტოპის სახელი:</div>
                        <div>ლეპტოპის ბრენდი:</div>
                        <div>RAM:</div>
                        <div>მეხსიერების ტიპი:</div>
                      </div>

                      <div className=''>
                        <div> 
                            {laptopDetails.laptop.name}
                        </div>
                        <div> 
                            {laptopDetails.laptop.brand_id}
                        </div>
                      
                      
                        <div>{laptopDetails.laptop.ram}</div>
                        <div>{laptopDetails.laptop.hard_drive_type}</div>
                      </div>
                  </div>



                  <div>
                      <div>
                        <div> CPU:</div>
                        <div>CPU-ს ბირთვი:</div>
                        <div>CPU-ს ნაკადი:</div>
                      </div>

                      <div className=''>
                        <div> 
                            {laptopDetails.laptop.cpu.name}
                        </div>
                        <div> 
                            {laptopDetails.laptop.cpu.cores}
                        </div>
                      
                      
                        <div> {laptopDetails.laptop.cpu.threads}</div>
                       
                      </div>
                  </div>

                </div>
                <div className='info info-row info-3'>
                  <div>
                  <div>
                        <div> ლეპტოპის მდგომარეობა:</div>
                        <div>ლეპტოპის ფასი:</div>
                       
                      </div>

                      <div className=''>
                        <div> 
                            {laptopDetails.laptop.state}
                        </div>
                        <div> 
                            {laptopDetails.laptop.price}
                        </div>
                      
                      </div>
                  </div>



                  <div>
                    <div>შევსების რიცხვი:</div>
                    <div>{laptopDetails.laptop.purchase_date}</div>
                  </div>
                 
                </div>




               
            </div>
            
            : "იტვირთება"
           
        }

{
 console.log(laptopDetails.laptop)

 
}
         
    </>
  )
}

export default recordDetail