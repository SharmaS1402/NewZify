import React, { Component } from 'react'
import loading from '../loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='img-fluid' style = {{height : '100px',width : '100px'}} src={loading} alt={loading}/>
      </div>
    )
  }
}
