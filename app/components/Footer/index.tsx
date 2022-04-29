
import type { RemixLinkProps } from "@remix-run/react/components";
import { Link, useParams } from "remix";
import Logo from "../../assets/images/logo.png";


/**
 * Get a link with the current locale parameter
 * @returns A localized <Link>
 */
export const Footer = () => {
  const navLinks = [{ name: 'Home', route: '/'},{ name: 'About', route: '/about'},{ name: 'Services', route: '/services'},{ name: 'Contact', route: '/contact'}]

  return (
    <footer>
      <img aria-hidden="true" className="footer-img light-mode-svg" src="https://d33wubrfki0l68.cloudfront.net/c272e13f11fec5e8a82b6342bc194b3eb74b5b72/7cf10/images/footer-swoosh.svg" alt=""  />
      <img aria-hidden="true" className="footer-img dark-mode-svg" src="https://d33wubrfki0l68.cloudfront.net/3b756ae30ef51ccd8564c2978ea8a5a70f1931f8/95db7/images/footer-swoosh-dark.svg" alt="" />
      <div className="container">
          <div className="flex-group"> 
            
              <div className="footer-item image-box">
                  <img className="footer-logo mobile-display" src={Logo} alt="alki digital web designs logo" height="50" />
                  <img className="footer-logo desktop-display" src={Logo} alt="alki digital web designs logo" height="50" />
                  
                  <a href="mailto:alkidigital.webdesign@gmail.com">alkidigital.webdesign@gmail.com</a>
                  <a href="tel:509-481-7512">(509)481-7512</a>
              </div>
              <div className="footer-item"> 
                  <h2>Navigation</h2>
                  <div aria-hidden="true" className="footer-line"></div>
                  {navLinks.map((navLink)=>{
                            return  <Link key={navLink.name} className='link'  
                            to={navLink.route}>{navLink.name}</Link>

                  })}
              </div>
              <div className="footer-item">
                  <h2>Services</h2>
                  <div aria-hidden="true" className="footer-line"></div>
                  <p>Web Design</p>
                  <p>Website Maintenance</p>
                  <p>SEO Services</p>
                  <p>Content Creation</p>
                  <p>Logo Design</p>
              </div>
          </div>
      </div>
      <div className="branding">
          <p>Copyright &copy; 2022 | Alki Digital Web Services | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;