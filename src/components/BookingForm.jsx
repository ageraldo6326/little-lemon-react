import { Field, Formik, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, updateTimes, submitAPI }) {
  let [currentDate, setCurrentDate] = useState(new Date());
  let [myAvailableTimes, setMyavailableTimes] = useState(availableTimes);
  const navigate = useNavigate();

  useEffect(() => {
    setMyavailableTimes(updateTimes(currentDate));
    console.log("My Available", myAvailableTimes);
  }, [currentDate]);

  useEffect(() => {
    console.log("My Available (updated):", myAvailableTimes);
  }, [myAvailableTimes]);

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setCurrentDate(date);
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
    <div className="bookingForm-container">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          const isValid = submitAPI(values);
          console.log("Submit", values);

          if (isValid) {
            navigate("/confirmation", {
              state: {
                date: values.resDate,
                time: values.resTime,
                guests: values.guests,
                occasion: values.occasion,
              },
            });
          }
        }}
      >
        <Form className="bookingForm">
          <label htmlFor="res-date">* Choose date</label>
          <Field type="date" id="resDate" name="resDate">
            {({ field }) => (
              <input
                {...field}
                type="date"
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => {
                  field.onChange(e);
                  handleDateChange(e);
                }}
              />
            )}
          </Field>
          <ErrorMessage
            name="resDate"
            className="alert"
            render={(msg) => <div className="alert">{msg}</div>}
          />
          <label htmlFor="res-time">* Choose time</label>
          <Field as="select" id="resTime" name="resTime">
            <option></option>
            {Array.isArray(availableTimes) &&
              myAvailableTimes.map((time, index) => (
                <option key={index}>{time}</option>
              ))}
          </Field>
          <ErrorMessage
            name="resTime"
            render={(msg) => <div className="alert">{msg}</div>}
          />
          <label htmlFor="guests">* Number of guests</label>
          <Field as="select" id="guests" name="guests">
            <option></option>
            <option value="1">1 Diner</option>
            <option value="2">2 Diner</option>
            <option value="3">3 Diner</option>
            <option value="4">4 Diner</option>
            <option value="5">5 Diner</option>
            <option value="6">6 Diner</option>
            <option value="7">7 Diner</option>
            <option value="8">8 Diner</option>
            <option value="9">9 Diner</option>
            <option value="10">10 Diner</option>
          </Field>
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
