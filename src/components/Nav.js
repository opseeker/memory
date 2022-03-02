import React from 'react';
import '../css/Nav.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
      <>
        <div className='navbar'>
          <Title navTitle={props.navTitle}/>
          <NavList link1={props.link1} link2={props.link2} link3={props.link3} />
        </div>
        <div className='navEnd'></div>
      </>
  )
}
export default Navbar;

class Title extends React.Component {
    render() {
        return (
            <div className='nav-title'>{this.props.navTitle}</div>
        )
    }
}

class NavList extends React.Component {

    state = {
        clickedOutside: false
      };
    
      componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
      }
    
      myRef = React.createRef();
    
      handleClickOutside = e => {
        if (!this.myRef.current.contains(e.target)) {
          this.setState({ clickedOutside: true });
          document.getElementsByClassName('Dropdown')[0].classList.remove('active');
        }
      };
    
      handleClickInside = () => this.setState({ clickedOutside: false });
      menuToggle(){
        document.getElementsByClassName('Dropdown')[0].classList.toggle('active')
      }

    render(){
        return(
            <div className='nav-list' ref={this.myRef} onClick={this.handleClickInside}>
            <div className='nav-button' onClick={this.menuToggle}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
            </div>
            <ul className='Dropdown'>
                <li>
                    <Link to='/memory' className={this.props.link1?"active":""}>Home</Link>
                    <Link to='/about' className={this.props.link2?"active":""}>About</Link>
                    <Link to='/chapter' className={this.props.link3?"active":""}>chapters</Link>
                </li>
            </ul>
            </div>
        )
    }
}

Navbar.defaultProps = {
    navTitle: "Page"
}

Navbar.propTypes = {
    navTitle: PropTypes.string,
    link1: PropTypes.bool,
    link2: PropTypes.bool,
    link3: PropTypes.bool
}
