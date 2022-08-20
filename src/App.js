import './App.css';
import './Style/owlcarousel/assets/owl.carousel.min.css';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './pages/Shop'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
