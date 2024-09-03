import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/homePage";
import About from "./pages/aboutPage/aboutPage";
import Contact from "./pages/contactPage/contactPage";
import Header from "./components/header/header";
function App() {
  return (
    <Router>
          <Header/>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
