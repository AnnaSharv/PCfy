import React from 'react'
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import {useContext} from 'react'
// import {Context} from '../Datacontext'

// import { useForm } from "react-hook-form";
function LaptopFeatures() {
//   const value = useContext(Context);


  return (
    <fieldset>
      <div className='d-flex justify-content-between name-container'>
      <Form.Group  controlId="formBasicPassword">
          <Form.Label>leptopi</Form.Label>
          <Form.Control type="text" placeholder="laptop" name="laptop"
            // {...register("laptop", {
            //     required: true,
            //     maxLength: 5,
            //     pattern: /^[A-Za-z]+$/i
            //   })}
          />
          <Form.Text className="text-muted">
              მინიმუმ 2 სიმბოლო, ქართული ასოები
          </Form.Text>
  <input type="submit" />
     
      </Form.Group>
      <Form.Group  controlId="formBasicPassword">
          <Form.Label>გვარი</Form.Label>
          <Form.Control type="text" placeholder="ონიანი" />
          <Form.Text className="text-muted">
              მინიმუმ 2 სიმბოლო, ქართული ასოები
          </Form.Text>
      </Form.Group>
      </div>


      <Form.Group  controlId="formBasicPassword">
          <Form.Select aria-label="Default select example">
              <option>თიმი</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </Form.Select>
      </Form.Group>

      <Form.Group  controlId="formBasicPassword">
          <Form.Select aria-label="Default select example">
              <option>პოზიცია</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </Form.Select>
      </Form.Group>

    </fieldset>
  )
}

export default LaptopFeatures