import React, { Component } from 'react'
import oops from './oops.jpg';

export default class Oops extends Component {
  render() {
    return (
      <>
      <div className='oops'>
      <img src={oops} alt="oops !!" ></img>
      </div>
      <div className='text-center'>
      <button type="button" className="btn btn-dark my-5">Read Offline Loaded News &darr;</button>
      </div>
      </>
    )
  }
}
