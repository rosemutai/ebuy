import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="footer pl-32 flex justify-between bg-black/90 py-12 text-white">
      <div className="column-one">
        <h5 className="mb-4 font-bold text-brownish">HELP</h5>
        <ul>
          <li className="mb-4" ><a href="#">Help Center</a></li>
          <li className="mb-4" ><a href="#">Contact Us</a></li>
          <li className="mb-4" ><a href="#">Return Policy</a></li>
          <li className="mb-4" ><a href="#">Report</a></li>
        </ul>
      </div>

      <div className="column-two">
        <h5 className="mb-4 font-bold text-brownish">ABOUT EBUY</h5>
        <ul>
          <li className="mb-4"><a href="#">About Us</a></li>
          <li className="mb-4"><a href="#">Terms and Conditions</a></li>
          <li className="mb-4"><a href="#">Privacy</a></li>
          <li className="mb-4"><a href="#">Cookies</a></li>
        </ul>
      </div>

      <div className="column-one">
        <h5 className="mb-4 font-bold text-brownish">FOLLOW US</h5>
        <ul>
          <li className="mb-4">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} className='text-white' />
            </a>
          </li>
          <li className="mb-4"><a href="#"></a></li>
          <li className="mb-4"><a href="#"></a></li>
        </ul>
      </div>

      <div className="column-one">
        <h5 className="mb-4 font-bold text-brownish">HELP</h5>
        <ul>
          <li className="mb-4"><a href="#">Help Center</a></li>
          <li className="mb-4"><a href="#">Contact Us</a></li>
          <li className="mb-4"><a href="#">Return Policy</a></li>
          <li className="mb-4"><a href="#">Report</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer