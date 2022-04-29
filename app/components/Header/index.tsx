import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "remix";
import useMedia from "../../helpers/useMedia";

import Logo from "../../assets/images/logo.png";

/**
 * Get a link with the current locale parameter
 * @returns A localized <Link>
 */


const Header = ( props: { navActive: any; setNavActive: any; }) => {
    const {navActive, setNavActive} = props;
    const location = useLocation();     
    const navLinks = [{ name: 'Home', route: '/'},{ name: 'About', route: '/about'},{ name: 'Services', route: '/services'},{ name: 'Contact', route: '/contact'}]

    let isMobile: boolean | null = null;
    if(typeof window !== 'undefined') {
         isMobile = useMedia<boolean>(
            // Media queries
            ["(min-width: 1250px)", "(max-width: 1249px)"],
            // Column counts (relates to above media queries by array index)
            [false, true],
    
            false
       
          );
    
    }


 

const onClickHandler = ()=> {
    setNavActive(!navActive);
}
return (
    <header>
        <div className="mobile-wrapper">
            <div className="mobile-nav container mobile-nav-container">
                <img style={{pointerEvents: 'none', position: 'relative', marginRight:'auto !important'}} id="mobile-logo" src={Logo} alt="mobile_company_logo" height="60" /> 
                <Link style={{ position: 'absolute', left: 0, top: 0,  width: '100%', height: '100%',transform: 'translate(-50%)' }} to={'/'}/>

                <button aria-label="open the menu" id="menu-button" className={`hamburger hamburger--spring ${isMobile && navActive ? 'is-active' : ''}`} onClick={onClickHandler} type="button">
                    <span aria-hidden="true" className="hamburger-box">
                        <span aria-hidden="true" className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>


        <nav>
            {isMobile ?
            <div style={navActive  ? {width: '60%', position: 'fixed'} :  {width: 0}} className="navbar-menu">
                <div id="side-menu" className="side-nav">
                <img style={{pointerEvents: 'none', position: 'relative', marginRight:'auto !important'}} src={Logo} alt="company logo" width="100px" />                
                <Link style={{ position: 'absolute', left: 0, top: 0,  width: '100%', height: '100%',transform: 'translate(-50%)' }} to={'/'}/>
                    <ul  id="on-top" className={`navbar-links ${!navActive ? 'clicked' : ''}`}>
                        {navLinks.map((navLink)=>{
                            return <li onClick={onClickHandler} style={navActive  ? {opacity: 1, visibility: 'visible'} :  {opacity: 0, visibility: 'hidden'}} key={navLink.name + navLink.route} className="nav-li"><Link style={navActive || !isMobile   ? {opacity: 1, visibility: 'visible'} :  {opacity: 0, visibility: 'hidden'}} className={location.pathname === navLink.route ? 'active-menu' : ''}  
                            to={navLink.route}>{navLink.name}</Link></li>

})}
                    
                    </ul>
                </div>
            </div>
           : 
           <div style={ {width: 0}} className="navbar-menu">
                <div id="side-menu" className="side-nav">
                <img style={{pointerEvents: 'none', position: 'relative', marginRight:'auto !important'}} src={Logo} alt="company logo" width="100px" />
                <Link style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%',transform: 'translate(-50%)' }} to={'/'}/>
                    <ul  id="on-top" className={`navbar-links ${!navActive ? 'clicked' : ''}`}>
                        {navLinks.map((navLink)=>{
                            return <li onClick={onClickHandler}  key={navLink.name + navLink.route} className="nav-li"><Link className={location.pathname === navLink.route ? 'active-menu' : ''}  
                            to={navLink.route}>{navLink.name}</Link></li>

})}
                    
                    </ul>
                </div>
            </div> }
        </nav>
    </header>

  );
};

export default Header;


