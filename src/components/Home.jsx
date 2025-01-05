import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Crafting Excellence in Steel</h1>
          <p className="hero-subtitle">Premium Steel Doors & Railings for Every Space</p>
          <button className="hero-button">Explore Our Collection</button>
        </div>
      </header>
    {/* Banner */}
      <section id="billboard">
        <div className="row align-items-center g-0 bg-secondary">
            <div className="col-lg-6">
            <div className="m-4 p-4 m-lg-5 p-lg-5">
                <h6 className="text-white">
                <span className="text-primary">#</span>1 Best HVAC Services
                </h6>
                <h2 className="display-4 fw-bold text-white my-4">
                Air duct cleaning, AC cleaning & Home Maintenance
                </h2>
                <ul className="info d-flex flex-wrap align-items-center list-unstyled">
                <li className="fw-medium text-white d-flex align-items-center me-4">
                    <svg className="text-primary me-1" width="20" height="20">
                    <use xlinkHref="#check-circle"></use>
                    </svg>
                    Servicing
                </li>
                <li className="fw-medium text-white d-flex align-items-center me-4">
                    <svg className="text-primary me-1" width="20" height="20">
                    <use xlinkHref="#check-circle"></use>
                    </svg>
                    Repairs
                </li>
                <li className="fw-medium text-white d-flex align-items-center me-4">
                    <svg className="text-primary me-1" width="20" height="20">
                    <use xlinkHref="#check-circle"></use>
                    </svg>
                    Installation
                </li>
                </ul>
                <a href="index.html" className="btn btn-light btn-bg btn-slide hover-slide-right mt-4">
                <span>Book Appointment</span>
                </a>
            </div>
            </div>
            <div className="col-lg-6">
            <img src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_2.png" alt="img" className="img-fluid" />
            </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="about-description">
            We specialize in manufacturing high-quality steel doors and railings
            that combine durability, aesthetics, and security. Whether you're
            upgrading your home or working on a commercial project, our designs
            are tailored to fit your needs.
          </p>
        </div>
      </section>
      {/* Products Section */}
      <section className="products-section">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <img
              src="/images/steel-door.jpg"
              alt="Steel Door"
              className="product-image"
            />
            <h3 className="product-title">Premium Steel Doors</h3>
            <p className="product-description">
              Elegantly crafted steel doors that provide unmatched security and
              style.
            </p>
          </div>
          <div className="product-card">
            <img
              src="/images/steel-railing.jpg"
              alt="Steel Railing"
              className="product-image"
            />
            <h3 className="product-title">Stylish Railings</h3>
            <p className="product-description">
              Sleek and durable railings designed to elevate any space.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The steel door we purchased is absolutely stunning and has added
              a modern touch to our home. Highly recommend!"
            </p>
            <h4 className="testimonial-author">- John D.</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Their railings transformed our balcony into a stylish and secure
              space. Excellent craftsmanship!"
            </p>
            <h4 className="testimonial-author">- Sarah W.</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Steel Doors & Railings. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;



// Slider + Main Info + Inf Scroll + Footer