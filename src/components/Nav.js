import React from 'react';
import '../css/Nav.css';

export const Navbar = (props) => {
  return (
    <div className='navbar'>
        <div className='nav-title'>{props.navTitle}</div>
        <div className='nav-button'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>
        <div className='nav-list'>
            <ul>
                <li>
                    <a href="#" id="nLink1">Home</a>
                    <a href='#' id="nLink2">About</a>
                    <a href='#' id="nLink3">chapters</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

const
button1 = document.getElementById('nLink1'),
button2 = document.getElementById('nLink2'),
button3 = document.getElementById('nLink3')

button1.addEventListener('click',()=>{
    button2.classList.remove('active')
    button3.classList.remove('active')
})