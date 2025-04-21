import { useReducer } from "react";
import BookingForm from "./BookingForm";
import Footer from "./Footer";
import Header from "./Header";
import { fetchAPI, submitAPI } from "../apis/api";

function BookingPage() {
  const initializeTimes = () => {
    const today = new Date();
    const times = fetchAPI(today);
    return times;
  };

  const updateTimes = (date) => {
    const times = fetchAPI(date);
    setAvailableTimes(times);
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </>
  );
}

export default BookingPage;
