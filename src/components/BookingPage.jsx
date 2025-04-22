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
    console.log("Entro aqui", date);
    let times = fetchAPI(date);
    return times;
  };

  let availableTimes = initializeTimes();

  return (
    <>
      <Header />
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitAPI={submitAPI}
      />
      <Footer />
    </>
  );
}

export default BookingPage;
