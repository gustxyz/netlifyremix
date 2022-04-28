




import type { RemixLinkProps } from "@remix-run/react/components";
import { Link, useParams } from "remix";
// @ts-nocheck
/**
 * Get a link with the current locale parameter
 * @returns A localized <Link>
 */
const Contact = () => {
  return (
  

    <main id="main">

   
        
        <section id="page-header">
            <h1>Contact Us</h1>
        </section>

      
        <section id="valley-form" className="container">

        <div>
        <div className="border-group">
            <p>Email:</p>
            <p>alkidigital.webdesign@gmail.com</p>
        </div>
        <div className="border-group">
            <p>Phone:</p>
            <p>(509) 481-7512</p>
        </div>
        </div>
       
            <div className="form-wrapper">
                <form data-netlify="true" id='contact' method='post' name='form'><input type='hidden' name='form-name' value='form'/>
                    <h3 className="contact-topper"><span>DROP</span> US A LINE</h3>
                    
                        <input aria-label="name" name="name" placeholder="Name" type="text" tabIndex={1} required />
                        <input aria-label="name" name="name" placeholder="Business" type="text" tabIndex={2} required />
                        <input aria-label="email" name="email" placeholder="Email Address" type="email" tabIndex={3} required />
                        <input aria-label="phone number" name="phone" placeholder="Phone Number" type="tel" tabIndex={4}required />
                        <textarea aria-label="write your message" name="message" placeholder="Type your Message Here...." tabIndex={5} required></textarea>
                       
                    <p className="form-submit">
                        <button name="submit" type="submit" id="contact-submit" className="primary button-solid" data-submit="...Sending">Submit</button>
                    </p>
                </form>
            </div>
        </section>

    </main>

  
)
}



export default Contact;