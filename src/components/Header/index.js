import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header-con">
    <Link className="web-btn" to="/">
      <img
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        className="web-img"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          type="button"
          className="ham-btn"
          aria-label="menu"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu />
        </button>
      }
    >
      {close => (
        <>
          <div className="popup-con">
            <button
              onClick={() => close()}
              className="close-btn"
              type="button"
              aria-label="Close menu"
              data-testid="closeButton"
            >
              <IoMdClose className="close-img" />
            </button>
            <div className="menu-card">
              <ul>
                <Link to="/" className="link-custom">
                  <li className="menu-item">
                    <AiFillHome className="close-img" />
                    <h1 className="menu-head">Home</h1>
                  </li>
                </Link>
                <Link to="/about" className="link-custom">
                  <li className="menu-item">
                    <BsInfoCircleFill className="close-img" />
                    <h1 className="menu-head">About</h1>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </>
      )}
    </Popup>
  </div>
)

export default Header
