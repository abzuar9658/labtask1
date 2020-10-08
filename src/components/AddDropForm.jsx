import React from 'react'
import { Container, Form } from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'Male' },
  { key: 'f', text: 'Female', value: 'Female' },
  { key: 'o', text: 'Other', value: 'Other' },
]

const cityOptions = [
    { key: 'l', text: 'Lahore', value: 'Lahore' },
    { key: 'k', text: 'Karachi', value: 'Karachi' },
    { key: 'i', text: 'Islamabad', value: 'Islamabad' },
    { key: 'p', text: 'Peshawar', value: 'Peshawar' }
  ]
  

const AddDropForm = ({setName , setAge, setCity , setGender, handleSubmit, handleReset})=>{
    return (
        <Container >
        <h2>Add/Drop Form</h2>
        <Form>
          <Form.Input fluid name = 'name' label='Enter Name' placeholder='Name' onChange = {setName}/>
          <Form.Select
            fluid
            name = 'gender'
            label='Gender'
            options={genderOptions}
            placeholder='Gender'
            onChange = {setGender}
          />
          <Form.Input fluid name = 'age' label='Enter Age' placeholder='Age' onChange = {setAge}/>
          <Form.Select
            fluid
            name = 'city'
            label='City'
            options={cityOptions}
            placeholder='City'
            onChange = {setCity}
          />    
        <Form.Group>
          <Form.Button onClick = {handleSubmit}>Add</Form.Button>
          <Form.Button onClick = {handleReset}>Reset</Form.Button>
        </Form.Group>
      </Form>
      </Container>
    )
}
export default AddDropForm;