import React from 'react';
import '../css/Nav.css';

export const Navbar = (props) => {
  return (
      <>
    <div className='navbar'>
        <div className='nav-title'>{props.navTitle}</div>
        <div className='nav-button' onClick={menuToggle}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>
        <div className='nav-list'>
            <ul>
                <li>
                    <a href="/" id="na1">Home</a>
                    <a href='/about' id="na2">About</a>
                    <a href='/chapters' id="na3">chapters</a>
                </li>
            </ul>
        </div>
    </div>
    <div className='navEnd'></div>
    </>
  )
}

const 
navList = document.getElementsByClassName('nav-list')[0]

const menuToggle=()=>{
    navList.classList.toggle('active')
}