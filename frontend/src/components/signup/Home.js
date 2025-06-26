import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center justify-content-center">
        <div className="col-md-10">
          {/* Hero Image */}
          <img
            src="/media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
            style={{ maxHeight: "300px" }}
          />

          {/* Heading */}
          <h1 className="display-5 fw-bold mt-4">Invest in everything</h1>

          {/* Subtext */}
          <p className="text-muted fs-5 mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and more.
          </p>

          {/* Signup Button */}
          <Link to="/signup" className="btn btn-primary fs-5 px-4 py-2">
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
