import "./mobile.navigation.styles.css";

import {ReactComponent as MobileIcon  } from '../../assest/mobile_menu_icon.svg';

const MobileNavigation = ()=> {
    return (
        <div className='mobile-icon-container' >
            <MobileIcon className='mobile-icon' />
             
        </div>
    )
}

export default MobileNavigation;