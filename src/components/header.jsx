import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import Switch from 'react-js-switch';
import { ThemeContext } from '../App';

const Header = () => {
  const {toggleTheme, theme} = useContext(ThemeContext)
  return (
    <div id={theme} >
       <div className="navBar">
        <Link to= "/">
        <h1  className='header'>Explore</h1> 
        </Link>
        <div className="switch">
        <Switch onChange={toggleTheme}/>
        </div>
  </div>
    </div>
  )
}

export default Header