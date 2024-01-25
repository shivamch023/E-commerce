import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/cart1.png'
import instagram_icon from '../Assets/pngwing.com.png'
import pinterest_png from '../Assets/Pinterest-logo.png'
import watsapp_png from '../Assets/whatsapp_PNG.png'
import facebook_png from '../Assets/Facebook.png'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="foooter-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="foooter-icons-container">
                <img src={pinterest_png} alt="" />
            </div>
            <div className="foooter-icons-container">
                <img src={watsapp_png} alt="" />
            </div>
            <div className="foooter-icons-container">
                <img src={facebook_png} alt="" />
            </div>
            
        </div>
        <div className="foooter-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rigth Reserved.</p>
        </div>
    </div>
  )
}
export default Footer;
