import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/Dashboard';
import TourClassic from './pages/TourClassic';
import Header from './common/Header';
import Footer from './common/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import TourSideThumbnail from './pages/TourSideThumbnail';
import Destination from './pages/Destination'
import PriceTable from './pages/PriceTable'
import Blog from './pages/Blog';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/tourclassic' element={<TourClassic />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tourside' element={<TourSideThumbnail />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/price' element={<PriceTable />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
