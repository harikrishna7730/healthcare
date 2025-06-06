
import { Search ,Bell } from 'lucide-react';
import"./Navbar.css"
const Navbar = () => {
  return (
    <nav className='main'>
        <div className='search-bar'>
           <Search className='search-icon'/>
           <input type="text" name='search'  placeholder='Search'/>
           <Bell className='bell-icon'/>
        </div>
    </nav>
  )
}

export default Navbar
