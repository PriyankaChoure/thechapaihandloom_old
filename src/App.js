import logo from './logo.svg';
import './App.css';
import Header from './components/main-header/header.component';
import Footer from './components/main-footer/footer.component';
import ProductCard from './components/product-card/product-card.component';
import redImage from './assest/product-image/silkRedSaree.png';
import blueImage from './assest/product-image/silkBlueSaree.png';
const data = [
  {
    id: 1,
    name: 'Silk Red Saree',
    imageUrl: redImage,
    category: "Silk Saree",
    actualPrice : 1200,
    offerPrice: 1000
  },
  {
    id: 2,
    name: 'Silk Bule Saree',
    imageUrl: blueImage,
    category: "Silk Saree",
    actualPrice : 1500,
    offerPrice: 1300
  },
  {
    id: 3,
    name: 'Silk Red Saree',
    imageUrl: blueImage,
    category: "Silk Saree",
   
    offerPrice: 1700
  },
  {
    id: 4,
    name: 'Silk Red Saree',
    imgUrl: redImage,
    category: "Silk Saree",
    actualPrice : 1500,
    offerPrice: 1500
  },  {
    id: 1,
    name: 'Silk Red Saree',
    imageUrl: redImage,
    category: "Silk Saree",
    actualPrice : 1200,
    offerPrice: 1000
  },
  {
    id: 2,
    name: 'Silk Bule Saree',
    imageUrl: blueImage,
    category: "Silk Saree",
    actualPrice : 1500,
    offerPrice: 1300
  },
  {
    id: 3,
    name: 'Silk Red Saree',
    imageUrl: blueImage,
    category: "Silk Saree",
   
    offerPrice: 1700
  },
  {
    id: 4,
    name: 'Silk Red Saree',
    imgUrl: redImage,
    category: "Silk Saree",
    actualPrice : 1500,
    offerPrice: 1500
  },
]

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='categories-container'>
        {
          data.map((product)=>{
            return (
              <ProductCard product={product} />
            )
          })
        }
      </div>
      <div className='footer_container'>
        <footer>
          <Footer/> 
        </footer>
      </div>



    </div>
  );
}

export default App;
