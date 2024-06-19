import React, { Component } from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import News from './components/News'
import {Routes,Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
      <Routes>
        <Route path="/" element={<><Navbar/><News key="general" category="general" country="in" pageSize={10}/></>}/>
        <Route path="/business" element={<><Navbar/><News key="business" category="business" country="in" pageSize={10}/></>}/>
        <Route path="/health" element={<><Navbar/><News key="health" category="health" country="in" pageSize={10}/></>}/>
        <Route path="/sports" element={<><Navbar/><News key="sports" category="sports" country="in" pageSize={10}/></>}/>
        <Route path="/science" element={<><Navbar/><News key="science" category="science" country="in" pageSize={10}/></>}/>
        <Route path="/technology" element={<><Navbar/><News key="technology" category="technology" country="in" pageSize={10}/></>}/>
        <Route path="/entertainment" element={<><Navbar/><News key="entertainment" category="entertainment" country="in" pageSize={10}/></>}/>
      </Routes>
      </>
    )
  }
}
