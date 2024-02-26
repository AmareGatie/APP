import React,{useState} from 'react'
import PropTypes from 'prop-types'

function AddEmployee(props) {
  //  write a function to handle the form submition
  
  function handleSubmit(event){
  
    event.preventDefault();
  
  }

  


  return (
    <div>
    <h1>Add employee</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" /><br />
      <label htmlFor="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" /><br />
      <label htmlFor="email">Email:</label><br />
      <input type="text" id="email" name="email" /><br />
      <label htmlFor="password">Password:</label><br />
      <input type="text" id="password" name="password" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
  )
}

AddEmployee.propTypes = {

}

export default AddEmployee


