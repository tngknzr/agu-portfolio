import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div> 
        <Link href='/'>Home</Link>
        <Link href='/contact'>Contact me</Link>
        <Link href='/about'>About me</Link> 
    </div>
  )
}

export default Navbar