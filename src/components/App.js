import React, { Component } from 'react';
import AddDropForm from './AddDropForm';
import TableComponent from './Table'
//import {persons} from './persons'
import './App.css'


class App extends Component{
  constructor(){
    super();
    this.state = {
      name : '',
      genedr: '',
      age: -1,
      city: '',
      persons: []
    }
  }
  setName = (e) =>{
    this.setState({ name : e.target.value })
  }
  setAge = (e)=>{
    this.setState({ age : e.target.value })
  }
  setGender = (e, {value}) =>{
    this.setState({ gender : value })
  }
  setCity = (e, {value})=>{
    this.setState({ city : value })
  }
  handleSubmit = ()=>{
    if(this.state.name === '')return null;
    let name = this.state.name
    let age = this.state.age
    let city = this.state.city
    let gender = this.state.gender
    let newPersonsList = this.state.persons;
    this.setState(
      {
        persons: [...newPersonsList, {
          name,gender,age,city
        }]
      }
    )
    this.setState({
      name: '',
      age: '',
      city: '',
      gender: '',
    })
  }
  handleReset = (onSubmitProps) => {
    console.log('Reset clicked')
    onSubmitProps.resetForm();
  };
  render(){
    return (
      <div className="ui container">
        <div className= 'App'>
        <div className = 'table'>
          <TableComponent persons = {this.state.persons}/>
        </div>        
        <div className='form'>
          <AddDropForm setName = {this.setName} setAge = {this.setAge} setCity = {this.setCity} setGender = {this.setGender} handleSubmit = {this.handleSubmit} handleReset = {this.handleReset}/>
        </div>  
        </div> 
      </div>
    );
  }
  
}

export default App;
