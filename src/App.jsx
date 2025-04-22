import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookingPage from "./components/BookingPage";
import Homepage from "./components/Homepage";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
