import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="footer px-32 flex justify-between bg-black/90 py-12 text-white">
      <div className="column-one">
        <h5 className="mb-4 font-bold text-brownish/70">HELP</h5>
        <ul>
          <li className="mb-4" ><a href="#">Help Center</a></li>
          <li className="mb-4" ><a href="#">Contact Us</a></li>
          <li className="mb-4" ><a href="#">Return Policy</a></li>
          <li className="mb-4" ><a href="#">Report</a></li>
        </ul>
      </div>

      <div className="column-two">
        <h5 className="mb-4 font-bold text-brownish/70">ABOUT EBUY</h5>
        <ul>
          <li className="mb-4"><a href="#">About Us</a></li>
          <li className="mb-4"><a href="#">Terms and Conditions</a></li>
          <li className="mb-4"><a href="#">Privacy</a></li>
          <li className="mb-4"><a href="#">Cookies</a></li>
        </ul>
      </div>

      <div className="column-one">
        <h5 className="mb-4 font-bold text-brownish/70">FOLLOW US</h5>
        <ul className='flex gap-3'>
          <li className="mb-4">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} className='text-white
                hover:text-brownish/70 hover:scale-90 hover:transition-all' />
            </a>
          </li>
          <li className="mb-4">
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} className='text-white
                hover:text-brownish/70 hover:scale-90 hover:transition-all' />
            </a>
          </li>
          <li className="mb-4">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className='text-white
                hover:text-brownish/70 hover:scale-90 hover:transition-all' />
            </a>
          </li>

           <li className="mb-4">
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} className='text-white
                hover:text-brownish/70 hover:scale-90 hover:transition-all' />
            </a>
          </li>
        </ul>
      </div>

      <div className="column-one">
        <h5 className="mb-4 font-bold text-brownish/70">HELP</h5>
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