import React, { Component } from 'react'
import { lineSpinner } from 'ldrs'

lineSpinner.register()

export class Spinner extends Component {
  
  render() {
    return (
      <div className='text-center'>
       <l-line-spinner
  size="40"
  stroke="3"
  speed="1" 
  color="black" 
></l-line-spinner>
      </div>
    )
  }
}

export default Spinner












