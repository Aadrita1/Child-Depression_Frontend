import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/rocket-lunch.png'
import menu from '../assets/menu-icon.webp'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    function closeMenu() {
      setShowMenu(false)
    }
    useEffect(() => {
      function handleResize() {
        if (window.innerWidth >= 768) {
          setShowMenu(false);
        }
      }
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return(
        <div>
        <nav>
        <div>
      <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="visibility-desktop">
        <ul>
          <Link to="/" className='link4'><li>Home</li></Link>
          <Link to="/aboutus-page" className='link4'><li>About Us</li></Link>
          <Link to="/symptoms" className='link4'><li>Symptoms</li></Link>
          <Link to="/bmi-calculator" className='link4'><li>BMI Calculator</li></Link>
          <Link to="/therapy-page" className='link4'><li>Resources</li></Link>
        </ul>
        </div>
        <div
          className="visibility-mobile"
          onClick={() => { setShowMenu(prev => !prev) }}
        >
          <img src={menu} alt="" />
        </div>
      </nav>
      {showMenu && (
        <>
          <div className="mobile-nav">
            <ul>
              <li onClick={closeMenu}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/aboutus-page">About US</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/symptoms">Symptoms</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/bmi-calculator" className='link4'>BMI Calculator</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/therapy-page">Resources</Link>
              </li>
            </ul>
            </div>
            </>
      )}
      </div>
    )
}
export default Navbar