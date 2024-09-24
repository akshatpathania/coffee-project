
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import Shop from './Components/Shop';
import About from './Pages/About';
import Login from './Components/Login';
import Cartpage from './Components/Cartpage';
import { CartProvider } from './Components/Cartcontext';
import ProfilePage from './Components/ProfilePage';
import CheckoutPage from './Components/CheckoutPage';
import ScrollToTop from './Components/Btn';
function App() {
  return (
    <>
    <CartProvider>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/ContactUs" element={<ContactUs/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Cartpage" element={<Cartpage/>} />
    <Route path="/Shop" element={<Shop/>} />
    <Route path="/ProfilePage" element={<ProfilePage/>}></Route>
    <Route path="/CheckoutPage" element={<CheckoutPage />} />

    </Routes>
    
    <ScrollToTop/>
    <Footer></Footer>
    </CartProvider>
  
    </>
    
  );
}

export default App;
// niftify