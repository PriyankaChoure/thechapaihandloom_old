import Button from "../button/button.component";
import "./product-card.styles.css";

const ProductCard = ({product}) => {
    const {name, imageUrl,actualPrice, offerPrice} = product;
    console.log(product);
    const myStyle={
        backgroundImage: `url(${imageUrl})` ,
        height:'100%',
        width: '100%',
        marginTop:'0px',
        fontSize:'50px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    };
    return (
        // <div className="product-main-container">
            // <a>
                <div className='product-card-container'>
                    <img src={imageUrl} alt={name}/>                
                    <div className='product-card-footer' >
                        <h3 className='product-title heading-medium'>{name}</h3>
                        <div className="price-container">
                           {actualPrice &&  <span className='actual-price'>&#8377; {actualPrice}</span> }
                            <span className='offer-price'>&#8377; {offerPrice}</span>
                        </div>
                    </div>
                    <Button buttonType='addToCart' >Add to Cart</Button>
                </div>
            // </a>

        // </div>
    )

}

export default ProductCard;
