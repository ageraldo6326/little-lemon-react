import { useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "./Header";
import Footer from "./Footer";

function ConfirmedBooking() {
  const location = useLocation();
  const { date, time, guests, occasion } = location.state || {};

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{7,15}$/, "Phone number must be valid")
      .required("Phone is required"),
    comment: Yup.string().max(250, "Comment must be under 250 characters"),
  });

  const handleSubmit = (values) => {
    console.log("Customer Info:", values);
    alert("Customer data submitted successfully!");
  };

  return (
    <>
      <Header />
      <div className="confirmationForm-container">
        <div className="confirmation-container">
          <h1>🎉 Reservation!</h1>
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Time:</strong> {time}
          </p>
          <p>
            <strong>Guests:</strong> {guests}
          </p>
          <p>
            <strong>Occasion:</strong> {occasion}
          </p>

          <hr />

          <h3>👤 Register Your Details</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="confirmationForm">
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" placeholder="John" />
              <ErrorMessage
                name="firstName"
                render={(msg) => <div className="alert">{msg}</div>}
              />

              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" placeholder="Doe" />
              <ErrorMessage
                name="lastName"
                render={(msg) => <div className="alert">{msg}</div>}
              />

              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
              />
              <ErrorMessage
                name="email"
                render={(msg) => <div className="alert">{msg}</div>}
              />

              <label htmlFor="phone">Phone Number</label>
              <Field id="phone" name="phone" placeholder="1234567890" />
              <ErrorMessage
                name="phone"
                render={(msg) => <div className="alert">{msg}</div>}
              />

              <label htmlFor="comment">Comment</label>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                cols="30"
                rows="5"
                placeholder="Add a comment (optional)"
              />
              <ErrorMessage
                name="comment"
                render={(msg) => <div className="alert">{msg}</div>}
              />

              <div className="buttonReservation-container">
                <button className="buttonCallToAction" type="submit">
                  Confirm Reservation
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ConfirmedBooking;
