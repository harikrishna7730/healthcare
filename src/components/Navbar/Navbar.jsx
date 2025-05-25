import React from 'react'
import { Search ,Bell } from 'lucide-react';
import"./Navbar.css"
const Navbar = () => {
  return (
    <div className='main'>
        <div className='search-bar'>
           <Search className='search-icon'/>
           <input type="text" name='search'  placeholder='Search'/>
           <Bell className='bell-icon'/>
        </div>
    </div>
  )
}

export default Navbar
