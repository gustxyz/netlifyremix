import { Link, useLocation } from "remix";

import Logo from "../../assets/images/logo.png";

/**
 * Get a link with the current locale parameter
 * @returns A localized <Link>
 */
const Header = () => {
    const location = useLocation();     
    const navLinks = [{ name: 'Home', route: '/'},{ name: 'About', route: '/about'},{ name: 'Services', route: '/services'},{ name: 'Contact', route: '/contact'}]
return (
    <header>
        <div className="mobile-wrapper">
            <div className="mobile-nav container mobile-nav-container">
                <img id="mobile-logo" src={Logo} alt="mobile_company_logo" height="60" /> 
                <button aria-label="open the menu" id="menu-button" className="hamburger hamburger--spring" onClick="toggleNav()" type="button">
                    <span aria-hidden="true" className="hamburger-box">
                        <span aria-hidden="true" className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>


        <nav>
            <div className="navbar-menu">
                <div id="side-menu" className="side-nav">
                    <img src={Logo} alt="company logo" width="100px" />
                    <ul  id="on-top" className="navbar-links">
                        {navLinks.map((navLink)=>{
                            return <li key={navLink.name + navLink.route} className="nav-li"><Link className={location.pathname === navLink.route ? 'active-menu' : ''}  
                            to={navLink.route}>{navLink.name}</Link></li>

})}
                    
                    </ul>
                </div>
            </div>
        </nav>
    </header>

  );
};

export default Header;