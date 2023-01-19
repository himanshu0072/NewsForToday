import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
            <Navbar/>
          <Routes>
            <Route path='/' element={<News pageSize={8} />}></Route>
          </Routes>
          <Routes>
            <Route path="/about" element={<About/>}></Route>
          </Routes>

      </Router>
      </>
    )
  }
}
