import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from "../pages/About";
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Testimonials from '../pages/Testimonials';
import Example from './components/Example';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Testimonials' element={<Testimonials />} />
        <Route path='/example' element={<Example />} />
      </Routes>
    </Router>
  );
}


export default App;
