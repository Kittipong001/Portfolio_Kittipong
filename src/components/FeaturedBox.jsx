import React from "react";
import view from "../assets/images/q2.png";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Kittpong Ngeewangtaku</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            Hello! My name is Kittipong Ngeewangtaku , and I am a software
            Engineering. I am passionate about Javascript and have experience in
            mySQL and UX/UI . I enjoy collaborating with others and am always
            eager to learn and grow.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Download CV <i className="uil uil-import"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/q.vasperx/">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100057105284923">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/Kittipong001">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={view} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
