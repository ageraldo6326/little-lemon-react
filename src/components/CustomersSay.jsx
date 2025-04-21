import CardTestimonial from "./CardTestimonial";

function CustomersSay() {
  return (
    <div
      id="testimonials"
      name="testimonials"
      className="card-container-testimonials"
    >
      <h1>Testimonial</h1>
      <div id="cardTestimonial" className="cards-testimonials">
        <CardTestimonial />
        <CardTestimonial />
        <CardTestimonial />
        <CardTestimonial />
      </div>
    </div>
  );
}

export default CustomersSay;
