import React from 'react'
import Logo from '../MovieLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4 font-[Arial]'>
      <img className='w-[30px]' src={Logo} alt=""/>

      <Link to="/" className='text-blue-500 text-l font-bold'>Home</Link>

      <Link to="/watchlist" className='text-blue-500 text-l font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar
