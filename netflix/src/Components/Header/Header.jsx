import React from 'react'
import './Header.css'
import netflix_logo from '../../assets/images/netflix_logo.png'
import PageviewIcon from '@mui/icons-material/Pageview';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
            <ul>
                <li><img src={netflix_logo} alt="Netflix Logo" width="100" /></li>
                <li>Netflix</li>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>   
                <li>Latest</li>
                <li>Mylist</li>
                <li>Browse by Languages </li>
            </ul>
        </div>
        <div className="header_right">
            <ul>
                <li><PageviewIcon /></li>
                <li><NotificationsNoneIcon /></li>
                <li><AccountBoxIcon /></li>
                <li><ArrowDropDownIcon /></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
