import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Oops from './Oops';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
  api=process.env.REACT_APP_NEWS_API;
  state ={progress:0};
  setProgress = (progress)=>{
    this.setState({progress:progress})
  };
  render() {
    const p=8;
    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}/>

            <Navbar/>
            
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} api={this.api} key="general" pageSize={p} country="in" category="general" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} api={this.api} key="sports" pageSize={p} country="in" category="sports" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} api={this.api} key="health" pageSize={p} country="in" category="health" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} api={this.api} key="business" pageSize={p} country="in" category="business" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} api={this.api} key="science" pageSize={p} country="in" category="science" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} api={this.api} key="technology" pageSize={p} country="in" category="technology" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} api={this.api} key="entertainment" pageSize={p} country="in" category="entertainment" />}></Route>
            <Route path="/about" element={<About key="about"/>}></Route>
          </Routes>
          {/* <Oops/> */}

      </Router>

      </>
    )
  }
}
