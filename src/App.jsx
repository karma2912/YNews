import React, { Component } from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import News from './components/News'
import {Routes,Route} from 'react-router-dom';

const App = () => {
    return (
      <>
      <Routes>
        <Route path="/" element={<><Navbar/><News key="general" category="general" country="us" pageSize={10}/></>}/>
        <Route path="/business" element={<><Navbar/><News key="business" category="business" country="us" pageSize={10}/></>}/>
        <Route path="/health" element={<><Navbar/><News key="health" category="health" country="us" pageSize={10}/></>}/>
        <Route path="/sports" element={<><Navbar/><News key="sports" category="sports" country="us" pageSize={10}/></>}/>
        <Route path="/science" element={<><Navbar/><News key="science" category="science" country="us" pageSize={10}/></>}/>
        <Route path="/technology" element={<><Navbar/><News key="technology" category="technology" country="us" pageSize={10}/></>}/>
        <Route path="/entertainment" element={<><Navbar/><News key="entertainment" category="entertainment" country="us" pageSize={10}/></>}/>
      </Routes>
      </>
    )
}
export default App
