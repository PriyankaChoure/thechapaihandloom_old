import './footer.styles.css'

const Footer = () => {

    return (
        <div className="main-footer-container">
            <h3 className='text-uppercase '>welcome to The Chapai Handloom</h3>
            <div className='footer-list-container'>
                <div className='standard-list-container'>
                    <h3 className='standard-title text-uppercase heading-font '>Populer search</h3>
                    <ul className='standard-list'>
                        <li className='standard-list-item'>
                            <a href='#'>Wedding Collection</a>
                        </li>
                        <li className='standard-list-item'>
                            <a href='#'>Silk Saree</a>
                        </li>
                        <li className='standard-list-item'>
                            <a href='#'>Silk Suit</a>
                        </li>

                    </ul>

                </div>
                <div className='standard-list-container'>
                    <h3 className='standard-title text-uppercase heading-font'>Quick Links</h3>
                    <ul className='standard-list'>
                        <li className='standard-list-item'>
                            <a href='#'>About us</a>
                        </li>
                        <li className='standard-list-item'>
                            <a href='#'>Contact us</a>
                        </li>
                        <li className='standard-list-item'>
                            <a href='#'>Track your order</a>
                        </li>
                        <li className='standard-list-item'>
                            <a href='#'>Media</a>
                        </li>

                    </ul>

                </div>
                <div className='standard-list-container'>
                    <h3 className='standard-title text-uppercase heading-font' >Customer Services</h3>
                    <ul className='standard-list'>
                        <li className='standard-list-item'>
                            <a href='#'>Shipping Policy</a>
                        </li>
                        <li className='standard-list-item'>
                            <a href='#'>Return Policy</a>
                        </li>
                        <li className='standard-list-item'>
                            <a href='#'>Return order</a>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    )

}
export default Footer;