import React, { Component,useState } from 'react'
import logo from "./ynlogonew.jpg"
import { Link } from 'react-router-dom'
import "./Navbar.css"
import SwitchButton from './SwitchButton'
export default class Navbar extends Component {
  render() {
    return (
     <>
     <header className="text-white font-semibold body-font mb-8 sticky mybgcolor top-0 z-1 sm:pt-0">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-white md:mb-0">
      <img src={logo} fill="none" className="w-8 h-8 text-white rounded-full border-2 border-white" viewBox="0 0 24 24"/>
      <span className="ml-3 text-2xl">YNews</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center text-3/2xl sm:pt-0 pt-4 ">
      <Link className="mr-5 hover:text-white hover:text-xl hover:underline" to='/'>General</Link>
      <Link className="mr-5 hover:text-white hover:text-xl hover:underline" to='/business'>Business</Link>
      <Link className="mr-5 hover:text-white hover:text-xl hover:underline" to='/Entertainment'>Entertainment</Link>
      <Link className="mr-5 hover:text-white hover:text-xl hover:underline" to='/Health'>Health</Link>
      <Link className="mr-5 hover:text-white hover:text-xl hover:underline" to='/Sports'>Sports</Link>
      <Link className="mr-5 hover:text-white hover:text-xl hover:underline" to='/Science'>Science</Link>
      <Link className="mr-5 hover:text-white hover:text-xl hover:underline" to='/Technology'>Technology</Link>
    </nav>
  </div>
</header>
     </>
    )
  }
}

