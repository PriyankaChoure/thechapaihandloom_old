import { useState, useEffect } from 'react';


import Button from '../button/button.component';
import DesktopNavigation from '../navigaion/desktop.navigation.component';
import MobileNavigation from '../navigaion/mobile.navigation.component';
import './header.styles.css'
const Header = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
      console.log("window width - ", window.innerWidth);
      if(window.innerWidth >= 320 && window.innerWidth <= 768){
        setIsMobile(true);
      }
    }, []);
    return (
        <div className='header-container'>
        <div className='header-sale-container'>
          <h3>Sale sale Sale</h3>
        </div>
          
        <div className='header-logo-container'>
          <div className='logo-image'>
            <h2>The Chapai Handloom</h2>
          </div>
            { isMobile && <MobileNavigation/>}
          <div className='user-container'>
            <span className='message'>Welcome Sukalp</span>
            <Button type='submit' buttonType='login'>Sign out </Button>
          </div>
        </div>
          {!isMobile &&
            <div className='main-nav-bar'>
                <DesktopNavigation/>
            </div>
          }
          
          


      </div>
    )
}
export default Header;