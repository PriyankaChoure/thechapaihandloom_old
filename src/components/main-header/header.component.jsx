
import Button from '../button/button.component';
import './header.styles.css'
const Header = () => {

    return (
        <div className='header-container'>
        <div className='header-sale-container'>
          <h3>Sale sale Sale</h3>
        </div>
        <div className='header-logo-container'>
          
          <div className='logo-image'>
            <h2>The Chapai Handloom</h2>
          </div>
          <div className='user-container'>
            <span className='message'>Welcome Sukalp</span>
            <Button type='submit' buttonType='login'>Sign out </Button>
          </div>
        </div>
        <div className='main-nav-bar'>
          <ul className='main-nav-list'>
            <li><a href='#'> New Arrivals</a> </li>
            <li><a href='#'> Sarees </a></li>
            <li><a href='#'> Dress Material </a> </li>
            <li><a href='#'> Dupattas </a> </li>
            <li><a href='#'> Suits </a> </li>
          </ul>

        </div>

      </div>
    )
}
export default Header;