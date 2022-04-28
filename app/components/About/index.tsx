


import type { RemixLinkProps } from "@remix-run/react/components";
import { Link, useParams } from "remix";
// @ts-nocheck
/**
 * Get a link with the current locale parameter
 * @returns A localized <Link>
 */
const About = () => {
  return (
    <main id="main">
    
    

  

    <section id="page-header">
        <h1>About Us</h1>
    </section>


    <section id="about" className="section">
        <div className="container">
            <div className="section-content">
                <span>Alki Digital Web Services</span>
                <h2>Giving Small Businesses The Big Business Treatment</h2>
                <p>My name is Alex, I'm the owner and sole developer of Alki Digital. After working in the tech industry for a little over 4 years I launched
                    this business as a way for me to serve small businesses while building my own. My goal is to build a company that can foster community, and 
                    provide a safe space for industry professionals to harness their skills to build careers of their own. 
                <br/><br/>
                A lot of small businesses don't have the funds to spend thousands of dollars upfront on a new website.
                The ones that do, get taken advantage of and have a terrible website that looks like it was built by someone in a dungeon 
                and haven't seen design trends for the last 10 years. A lot of businesses are in a tough spot - they either can't afford a good website, and 
                if they can they don't know who to trust to make something great. That's where the $0 down and $100 a month model comes in.  
                It's more managable for a small business to handle and won't hurt their bank accounts.
                </p>
            </div>
        </div>
    </section>


    <section id="circles">
        <div className="container">
            <div className="topper">
                <h2><span>Quality </span> Over Quantity</h2>
                <p>We focus on the needs on each individual business and tailor content around what makes it unique. Our collaborative process is very hands on 
                    as we work closely with you to create a website you're 100% happy with and not something you just settle for. 
                </p>
            </div>
            <div className="circles">
                <div className="circle-box">
                    <div className="circle"><span>1</span></div>
                    <h3>No Pre-Written Content</h3>
                    <p>We write unique and engaging content around your company.  Everyone is unique!</p>
                </div>
                <div className="circle-box">
                    <div className="circle"><span>2</span></div>
                    <h3>Unbeatable Customer Service</h3>
                    <p>No automated systems - When you need help the lead developer answers your call.</p>
                </div>
                <div className="circle-box">
                    <div className="circle"><span>3</span></div>
                    <h3>No Limits On Design</h3>
                    <p>We can edit the design to cater to your tastes.  Everything is customizable!</p>
                </div>
            </div>
        </div>
        <button className="button-solid about-button"  type="button">
            OUR SERVICES
        </button>
    </section>



    <section id="about-contact" className="section">
        <div className="about-container container">
            <div className="contact-left">
                <div className="contact-item">

                 
                    <div aria-hidden="true" className="contact-line"></div>
                    <div className="contact-info">
                        <h2>Phone:</h2>
                        <p>(509) 481-7512</p>
                    </div>
                </div>
                <div className="contact-item">
                  
                    <div aria-hidden="true" className="contact-line"></div>
                    <div className="contact-info">
                        <h2>Email:</h2>
                        <p>alkidigital.webdesign@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="form-wrapper">
                <form action="https://submit-form.com/Nutg910E" id='contact' method='post' name='ABOUT FORM'><input type='hidden' name='form-name' value='Contact Form' />
                    <h3 className="contact-topper"><span>DROP</span> US A LINE</h3>
                    
                        <input aria-label="name" name="name" placeholder="Your Name" type="text" tabIndex={1} required />
                        <input aria-label="email" name="email" placeholder="Your Email Address" type="email" tabIndex={2} required />
                        <input aria-label="phone number" name="phone" placeholder="Your Phone Number" type="tel" tabIndex={3}required />
                        <textarea aria-label="write your message" name="message" placeholder="Type your Message Here...." tabIndex={4} required></textarea>
                        <div><script src='https://www.google.com/recaptcha/api.js'></script>
<div className='g-recaptcha' data-sitekey='6LdAvUIUAAAAAHjrjmjtNTcXyKm0WKwefLp-dQv9'></div>
<noscript>
<div>
<div style={{width: 302, height: 422, position: "relative"}}>
<div style={{width: 302, height: 422, position: "absolute"}}>

{/* <iframe src="https://www.google.com/recaptcha/api/fallback?k=6LdAvUIUAAAAAHjrjmjtNTcXyKm0WKwefLp-dQv9" frameBorder={0} scrolling="no"
style={{width: 302, height: 422, borderStyle: "none"}}>

</iframe> */}
</div>
</div>
<div style={{width: 300, height: 60, borderStyle: 'none', bottom: 12, left: 25, margin: 0, padding: 0, right: 25, background: '#f9f9f9', border: '1px solid #c1c1c1', borderRadius: 3}}>
<textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response"
  style={{width: 250, height: 40, border: '1px solid #c1c1c1', margin: '10px 25px', padding: 0, resize: 'none'}} >
</textarea>
</div>
</div>
</noscript>
</div>
                    <p className="form-submit">
                        <button name="submit" type="submit" id="contact-submit" className="primary button-solid" data-submit="...Sending">Submit</button>
                    </p>
                </form>
            </div>
        </div>
    </section>

</main>
)
}



export default About;