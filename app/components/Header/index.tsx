import { Link } from "remix";
import Logo from "../../assets/images/logo.png";

/**
 * Get a link with the current locale parameter
 * @returns A localized <Link>
 */
const Header = () => {
    console.log(Logo);
  return (
    <header>
        <div className="mobile-wrapper">
            <div className="mobile-nav container mobile-nav-container">
                <img id="mobile-logo" src={Logo} alt="mobile_company_logo" height="60" /> 
                {/* <button aria-label="open the menu" id="menu-button" className="hamburger hamburger--spring" onClick="toggleNav()" type="button">
                    <span aria-hidden="true" className="hamburger-box">
                        <span aria-hidden="true" className="hamburger-inner"></span>
                    </span>
                </button> */}
            </div>
        </div>


        <nav>
            <div className="navbar-menu">
                <div id="side-menu" className="side-nav">
                    <img src={Logo} alt="company logo" width="100px" />
                    <ul id="on-top" className="navbar-links">
                        <li className="nav-li"><Link className='active-menu' to='/'>Home</Link></li>
                        <li className="nav-li"><Link to='about'>About</Link></li>
                        <li className="nav-li"><Link to='services'>Services</Link></li>
                        <li className="nav-li"><Link to='portfolio'>Portfolio</Link></li>
                        <li className="nav-li"><Link to='contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

  );
};

export default Header;