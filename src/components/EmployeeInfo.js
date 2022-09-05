import React, {useEffect, useState, useContext} from 'react'

import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

import {Context} from '../Datacontext'


function EmployeeInfo({formData, setFormData}) {
    const teams = useContext(Context);
    const [positions, setPositions] = useState([])
    const [filteredPositions, setFilteredPositions] = useState([])
    const [activeTeamId, setActiveTeamId] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    React.useEffect(() =>{
        console.log(watch("laptop"));
    
    }) 
    useEffect(() => {
        fetch('https://pcfy.redberryinternship.ge/api/positions')
        .then(res => res.json())
        .then(res => setPositions(res.data))

    }, [])

    useEffect(() => {
        window.localStorage.setItem("id", activeTeamId)
        let localStorageFilter = window.localStorage.getItem("id")
        let filteredPositions = []
       
        positions.filter((position, i) =>{ 
           return position.team_id == activeTeamId && filteredPositions.push([position.name, position.id])
        })


        console.log(localStorageFilter.length ,"localstorage");
        setFilteredPositions(filteredPositions)

    }, [activeTeamId])


    return (
        <fieldset className='employee-form w-100' >
            <div className='d-flex justify-content-between name-container'>
            <Form.Group  controlId="formBasicPassword">
                <Form.Label>სახელი</Form.Label>
                <Form.Control type="text" placeholder="გრიშა" 
                    value={formData.firstName} 
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}/>
                <Form.Text className="text-muted">
                    მინიმუმ 2 სიმბოლო, ქართული ასოები
                </Form.Text>
            </Form.Group>
            <Form.Group  controlId="formBasicPassword">
                <Form.Label>გვარი</Form.Label>
                <Form.Control type="text" placeholder="ონიანი" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
                <Form.Text className="text-muted">
                    მინიმუმ 2 სიმბოლო, ქართული ასოები
                </Form.Text>
            </Form.Group>
            </div>
       

            <Form.Group  controlId="formBasicPassword">
                <Form.Select aria-label="Default select example" 
                    value={formData.team}
                    onChange={(e) => {
                        setActiveTeamId(e.target.value);
                        setFormData({...formData, team: e.target.value, activeId: activeTeamId})
                    }}
                >
                    <option className='d-none'>თიმი</option>
                     {
                        teams.length !== 0 ?
                            teams.map((team,i) => {
                                return <option value={team.id} key={i}>{team.name}</option>
                                
                            }) :
                            <option>იტვირთება ...</option>
                     }
                </Form.Select>
            </Form.Group>

            <Form.Group  controlId="formBasicPassword">
                <Form.Select aria-label="Default select example"
                    value={formData.data}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                >
                    <option className='d-none'>პოზიცია</option>
                    {
                      filteredPositions.map((position,i) => {
                        return <option value={position[1]} key={i}>{position[0]}</option>
                      })
                    }
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>მეილი</Form.Label>
                <Form.Control type="email" placeholder="მეილი" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email:e.target.value})}
                />
                <Form.Text className="text-muted">
                    უნდა მთავრდებოდეს @redberry.ge-ით
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>ტელეფონის ნომერი</Form.Label>
                <Form.Control type="text" placeholder="+995 598 00 07 01" 
                    value={formData.number}
                    onChange={(e)=> setFormData({...formData, number: e.target.value})}
                />
                <Form.Text className="text-muted">
                    უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
                </Form.Text>
            </Form.Group>
           
          
        </fieldset>
    )
}

export default EmployeeInfo