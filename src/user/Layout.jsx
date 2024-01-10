import React, { useEffect, useState, useRef } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Layout.css";
import Swal from "sweetalert2";

import {
  FaReact,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
  FaYoutube,
} from "react-icons/fa";
import auth from "../firebase/FirebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { UserName } from "./componants/UserName";
import logo from "../assets/img/Logo.png";

// fontawsome Icon

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export const Layout = () => {
  const [isNavFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the state
      if (window.scrollY > 60) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //***Log Out Config */
 
  // ****************email send****************
 
  //************************     ***************/
  const bgclr1 = "rgba(0, 0, 0, 0.025)";
  return (
    <div>
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-6">
            <Link className="text-decoration-none" href="#" to="/">
              <div className="row">
                <div className="col-4">
                  <img className="img-fluid" src={logo} alt="" />{" "}
                </div>
                <div className="col-8 fs-4 aw_clr mt-3">
                  The First and Only INTEGRATIVE CENTER In Bangladesh
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6 mt-4 d-flex">
            <div className="text-end">
              <a
                href="https://www.facebook.com/awcbd.org/"
                target="blank"
                className="me-4 fclr "
              >
                <FaFacebook size={30} />
              </a>
              <a href="" className="me-4 text-dark">
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCcXjY_VSZGQvmuhJMg7hzLw"
                target="blank"
                className="me-4 text-danger"
              >
                <FaYoutube size={30} />
              </a>
              <a
                href=""
                className="me-4 "
                style={{
                  color:
                    "radial-gradient(ellipse at 0 0, 100px 50px, purple, red)",
                }}
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/american-wellness-center-bd/"
                target="blank"
                className="me-4 "
              >
                <FaLinkedin size={30} />
              </a>
            </div>
            <div className="fs-3 text-end aw_clr">+8809666-747470</div>
          </div>
          {/* <div className="col-md-3">
            
            <div className="nav-item">
              <button
                type="button"
                className="aw_button  fs-5 mt-4 w-75"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <FontAwesomeIcon icon={faBook} /> Appointment
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <nav className={isNavFixed ? 'navbar navbar-expand-lg navbar-light aw_bg fixed-top' : 'navbar navbar-expand-lg navbar-light aw_bg'}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link aw_navtext fs-5 me-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle aw_navtext fs-5 me-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>
                <ul className="dropdown-menu aw_bg">
                  <li>
                    <Link className="dropdown-item aw_navtext fs-6" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/doctor"
                    >
                      Our Doctors
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/founder"
                    >
                      Founder
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle aw_navtext fs-5 me-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </Link>
                <ul className="dropdown-menu aw_bg">
                  <li>
                    <Link className="dropdown-item aw_navtext fs-6" to="/vitamin-shots">
                    Vitamin Shots
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/ozone-therapies"
                    >
                      Ozone Therapies
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/houston-chiropractor"
                    >
                      Houston Chiropractor
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/modern-acupuncture"
                    >Modern-acupuncture
                    
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/kinesiology"
                    >Kinesiology
                    
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/naturopathy"
                    >
                      Naturopathy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/comprehensive"
                    >
                      Comprehensive
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/diet-plan"
                    >
                      Diet Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/personalized"
                    >
                     Personalized treatment plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/root-cause"
                    >
                    Healing root cause of disease
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item aw_navtext fs-6"
                      to="/natural-supp"
                    >
                   Natural-supp
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link aw_navtext fs-5 me-3"
                  aria-current="page"
                  to="/membership-facilities"
                >
                  Card
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link aw_navtext fs-5 me-3"
                  aria-current="page"
                  to="/success-stories"
                >
                  Success Stories
                </Link>
              </li>
             
            </ul>
          </div>

          <div className="nav-item">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <button
                type="button"
                className="aw_button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <FontAwesomeIcon icon={faBook} /> Appointment
              </button>
            </ul>
          </div>
        </div>
      </nav>

      {/* {/*{<!-- Modal Body -->} */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content ">
            <button
              type="button"
              className="btn-close close_btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-header">
              <p className="modal-title mx-auto " id="exampleModalLabel">
                <span className="title text-center d-block fs-1">
                  Make An Appointment
                </span>{" "}
                <span>
                  We can call you in few minutes, just enter your number below
                </span>
              </p>
              <br />
            </div>
            <p className="titleclr"></p>
            <div className="modal-body">
              <div className="">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScgOBupbtdMFc4xZO9FPlwrmmKK9rTrAV5RrbF478G0GHCXoQ/viewform?embedded=true"
                  className="w-100 full-height-container"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                >
                  Loading…
                </iframe>
              </div>
              
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>

      {/* ***************************
otlate showing here
*********************************/}
      <Outlet />

      {/* ***************************
Footer showing here
*********************************/}
      {/*{<!-- Footer -->} */}
      <footer className="text-center text-lg-start aw_clr">
        {/*{<!-- Section: Social media -->} */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/*{<!-- Left -->} */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/*{<!-- Left -->} */}

          {/*{<!-- Right -->} */}
          <div>
            <a
              href="https://www.facebook.com/awcbd.org/"
              target="blank"
              className="me-4 fclr "
            >
              <FaFacebook size={30} />
            </a>
            <a href="" className="me-4 ">
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCcXjY_VSZGQvmuhJMg7hzLw"
              target="blank"
              className="me-4 "
            >
              <FaYoutube size={30} />
            </a>
            <a href="" className="me-4 ">
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/american-wellness-center-bd/"
              target="blank"
              className="me-4 "
            >
              <FaLinkedin size={30} />
            </a>
          </div>
          {/*{<!-- Right -->} */}
        </section>
        {/*{<!-- Section: Social media -->} */}

        {/*{<!-- Section: Links  -->} */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/*{<!-- Grid row -->} */}
            <div className="row mt-3">
              {/*{<!-- Grid column -->} */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/*{<!-- Content -->} */}
                <img width="270px" src={logo} alt="" />
                <p>
                  We offer alternative functional medicine consultation,
                  regenerative therapies, and evidence-based Nutrition in
                  addition to Modern Medicine to complete the reverse of your
                  health conditions.
                </p>
              </div>
              {/*{<!-- Grid column -->} */}

              {/*{<!-- Grid column -->} */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/*{<!-- Links -->} */}
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Hospital
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Medicine Shop
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Green Kitchen
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Doctor
                  </a>
                </p>
              </div>
              {/*{<!-- Grid column -->} */}

              {/*{<!-- Grid column -->} */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/*{<!-- Links -->} */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/*{<!-- Grid column -->} */}

              {/*{<!-- Grid column -->} */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/*{<!-- Links -->} */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FaHome size={20} />
                  Islam Tower, Shukrabad Bus Stand, Dhaka, Bangladesh
                </p>
                <p>
                  <FaEnvelope size={20} />
                  acrhbd@gmail.com
                </p>
                <p>
                  <FaPhone size={20} /> +8809666-747470
                </p>
                <p>
                  <FaPrint size={20} />
                </p>
              </div>
              {/*{<!-- Grid column -->} */}
            </div>
            {/*{<!-- Grid row -->} */}
          </div>
        </section>
        {/*{<!-- Section: Links  -->} */}

        {/*{<!-- Copyright -->} */}
        <div className="text-center p-4">
          <span>© 2023 Copyright:</span>
          <a className="fw-bold" href="https://www.mostaksarker.com/">
            American Wellness Center;
          </a>
        </div>
        {/* {/*{<!-- Copyright -->} */}
      </footer>
      {/* {/*{<!-- Footer -->} */}
    </div>
  );
};
