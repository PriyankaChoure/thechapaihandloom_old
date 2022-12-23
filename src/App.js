import logo from './logo.svg';
import './App.css';
import Header from './components/main-header/header.component';
import Footer from './components/main-footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='footer_container'>
        <footer>
          <Footer/>
         
        </footer>
      </div>



    </div>
  );
}

export default App;
