import React, { Component } from 'react'
import loading from '../loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <>
      <div className='text-center my-4'>
      <img src={loading} alt="loading" height="80px" />
      </div> 
      </>
    )
  }
}
