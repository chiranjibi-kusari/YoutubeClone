import React from 'react'
import './Navbar.css'
import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import searchicon from '../../assets/search.png'
import uploadicon from '../../assets/upload.png'
import modericon from '../../assets/more.png'
import notificationicon from '../../assets/notification.png'
import profoleicon from '../../assets/jack.png'
import { Link } from 'react-router-dom'
const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
        <div className="nav-left flex-div">
            <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menuIcon} />
           <Link to='/'><img className='logo' src={logo} alt="" /></Link>
        </div>
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={searchicon} alt="" />
          </div>
            
        </div>
        <div className="nav-right flex-div">
            <img src={uploadicon} alt="" />
            <img src={modericon} alt="" />
            <img src={notificationicon} alt="" />
            <img src={profoleicon} className='user-icon' alt="" />
        </div>
    </nav>
  )
}

export default Navbar