import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="text-white text-center text-lg-start" style={{ background: '#FA7224' }}>
      <div className="container p-4">
        <div className="row mt-4">
          {/* Column 1 */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">About Us</h5>
            <p>
              Welcome to "Pizza House" restaurant where we serve delicious meals made from the freshest ingredients.
              Our commitment is to provide you with an exceptional dining experience.
            </p>
            <p>
              Enjoy a diverse menu ranging from classic favorites to new and exciting dishes.
            </p>
            <div className="mt-4">
              <a href="https://facebook.com" aria-label="Facebook" className="btn btn-floating btn-light btn-lg me-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="btn btn-floating btn-light btn-lg me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="btn btn-floating btn-light btn-lg me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="btn btn-floating btn-light btn-lg">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact Information</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-home"></i> 1234 Restaurant Ave, City, AA 99999
              </li>
              <li className="mb-3">
                <i className="fas fa-envelope"></i> <a href="mailto:contact@restaurant.com" className="text-white">contact@restaurant.com</a>
              </li>
              <li className="mb-3">
                <i className="fas fa-phone"></i> +1 (0) 000 000 000
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
            <h5 className="text-uppercase mb-4">Opening Hours</h5>
            <table className="table text-center text-white">
              <tbody>
                <tr>
                  <td>Monday:</td>
                  <td>11:00 AM - 10:00 PM</td>
                </tr>
                <tr>
                  <td>Tuesday:</td>
                  <td>11:00 AM - 10:00 PM</td>
                </tr>
                <tr>
                  <td>Wednesday:</td>
                  <td>11:00 AM - 10:00 PM</td>
                </tr>
                <tr>
                  <td>Thursday:</td>
                  <td>11:00 AM - 10:00 PM</td>
                </tr>
                <tr>
                  <td>Friday:</td>
                  <td>11:00 AM - 11:00 PM</td>
                </tr>
                <tr>
                  <td>Saturday:</td>
                  <td>11:00 AM - 11:00 PM</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>12:00 PM - 9:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 MONIRUZZAMAN: <a className="text-white" href="https://khabo-ki.vercel.app">Pizza House</a>
      </div>
    </footer>
  );
};

export default Footer;
