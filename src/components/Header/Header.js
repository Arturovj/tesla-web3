import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import NavbarEffect4 from '../Navbar/base/effect4/NavbarEfecto4'
import { useUserContext } from '../../contexts/userContext';



export default function Header({ isMenuOpen, setIsMenuOpen}) {
const { user } = useUserContext()
    

  return (
    <div className='header'>
        <div className='header__logo'>
            <Link to="/" >
                <img
                className='header__logoImg'
                src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
                alt=""/>
            </Link>
        </div>
        <div className='header__links'>

            <NavbarEffect4/>
            
            {/* <Link to="/cybertruck"> Cybertruck </Link>
            <Link to="/cyberquad"> CyberQuad </Link>
            <Link to="/robot"> Robot </Link>
            <Link to="/tequila"> Tequila </Link> */}
            
        </div>
        
        <div className='header__right'>
            {!user ? <Link to="login" > Log/in</Link> : <Link style={{color: "red"}} to="/perfil" > Logout</Link>}
            
            <Link to="/shop" className={isMenuOpen && 'header__link--hidden'}> Shop </Link>
            <Link to="/perfil" className={isMenuOpen && 'header__link--hidden'}>Account</Link>
            <div className='header__menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
            </div>
        </div>
    </div>
  )
}
