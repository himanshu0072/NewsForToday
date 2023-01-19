import React, { Component } from 'react'
import loading from '../loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <>
      <img src={loading} alt="loading"/>
      </>
    )
  }
}
