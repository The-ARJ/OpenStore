import './App.css';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
