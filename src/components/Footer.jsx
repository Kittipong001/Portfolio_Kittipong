import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <p>Kittipong Ngeewangtaku</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#About">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#Project">Project</a>
          </li>
          <li className="footer_menu_list">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
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
      <div className="bottom-footer">
        <p>
          {/*   คือ ตัวเว้นระยะ */}
          Copyright &copy;
          <a href="#home" style={{ texdecoration: "none" }}>
            Kittipong
          </a>
          -All rights reserved;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
