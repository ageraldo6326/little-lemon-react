import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function BookingForm({ availableTimes, dispatch }) {
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    dispatch({ date: selectedDate });
  };

  const initialValues = {
    resDate: "",
    resTime: "",
    guests: 1,
    occasion: "",
  };

  const SignupSchema = Yup.object().shape({
    resDate: Yup.date().required("Required"),
    resTime: Yup.string().required("Required"),
    guests: Yup.number().min(1, "Minimun 1").required("Required"),
    occasion: Yup.string().required("Required"),
  });

  return (
    <div className="bookingFrom-container">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="bookingForm">
          <label htmlFor="res-date">* Choose date</label>
          <Field type="date" id="resDate" name="resDate" />
          <ErrorMessage
            name="resDate"
            className="alert"
            render={(msg) => <div className="alert">{msg}</div>}
          />
          <label htmlFor="res-time">* Choose time</label>
          <Field as="select" id="resTime" name="resTime">
            <option></option>
            {Array.isArray(availableTimes) &&
              availableTimes.map((time, index) => (
                <option key={index}>{time}</option>
              ))}
          </Field>
          <ErrorMessage
            name="resTime"
            render={(msg) => <div className="alert">{msg}</div>}
          />
          <label htmlFor="guests">* Number of guests</label>
          <Field
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
          />
          <ErrorMessage
            name="guests"
            render={(msg) => <div className="alert">{msg}</div>}
          />
          <label htmlFor="occasion">* Occasion</label>
          <Field as="select" id="occasion" name="occasion">
            <option></option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </Field>
          <ErrorMessage
            name="occasion"
            render={(msg) => <div className="alert">{msg}</div>}
          />
          <div className="buttonReservation-container">
            <button className="buttonReservation" type="submit">
              Book Now
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default BookingForm;
