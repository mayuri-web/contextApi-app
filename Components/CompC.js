import React from 'react'
import {Fname, Lname} from '../App';


function CompC() {
  return (
    <div>
        <Fname.Consumer> 
          {(name) =>{
            return (
              <Lname.Consumer>
                {(lname) => {
                  return <h1>I am {name} {lname}</h1>
                }}
              </Lname.Consumer>
            )
          }}
        </Fname.Consumer>   
        
    </div>
  )
}

export default CompC
