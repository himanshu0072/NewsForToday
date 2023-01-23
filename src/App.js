import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Oops from './Oops';

export default class App extends Component {
  render() {
    const p=8;
    return (
      <>
      <Router>

            <Navbar/>
            
          <Routes>
            <Route exact path="/" element={<News pageSize={p} country="in" category="general" />}></Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={p} country="in" category="sports" />}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={p} country="in" category="health" />}></Route>
            <Route exact path="/business" element={<News key="business" pageSize={p} country="in" category="business" />}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={p} country="in" category="science" />}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={p} country="in" category="technology" />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={p} country="in" category="entertainment" />}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
          {/* <Oops/> */}

      </Router>

      </>
    )
  }
}
