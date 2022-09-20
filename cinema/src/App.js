import './App.css';
import About from './Components/About';
import Bookings from './Components/Bookings';
import Classifications from './Components/Classifications';
import Contact from './Components/Contact';
import Directions from './Components/Directions';
import Discussion from './Components/Discussion';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Listings from './Components/Listings';
import Navigation from './Components/Navbar';
import NewReleases from './Components/NewReleases';
import OpeningTimes from './Components/OpeningTimes';
import PlacesToGo from './Components/PlacesToGo';
import Screens from './Components/Screens';
// import SearchBar from './Components/SearchBar';


// As you work add imports to components used

import { Routes, Route } from "react-router-dom";
import BookingConfirmation from './Components/BookingConfirmation';

function App() {
  return (
  <>
    <Navigation />
  
    
    <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/classifications" element={<Classifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/listings" element={<Listings />} />
          <Route path="/newreleases" element={<NewReleases />} />
          <Route path="/openingtimes" element={<OpeningTimes />} />
          <Route path="/placestogo" element={<PlacesToGo />} />
          <Route path="/screens" element={<Screens />} />
          <Route path="/bookingConfirmation" element={<BookingConfirmation />} />
        </Routes>
      <Footer />
    </div>
  </>
  );
}

export default App;
