import React, { useEffect, useState, useRef } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Layout.css";
import logo from "../assets/img/ws.png";
import Swal from 'sweetalert2';

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
} from "react-icons/fa";
import auth from "../firebase/FirebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { UserName } from "./componants/UserName";

export const Layout = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user_email, setUser_email] = useState("");

  // send email 


  //send email

  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        const email = user.email;
        // console.log(email);
        setUser_email(email);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  //***Log Out Config */
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
// ****************email send****************
const form = useRef();
const sendEmail = async (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);

  try {
    const response = await fetch("https://mostaksarker.com/API/mail.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Email sent successfully. We will contact you soon.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email sending failed',
      });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error occurred',
    });
  }
};
  //************************     ***************/
  const bgclr1 = "rgba(0, 0, 0, 0.025)";
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand cll" href="#" to="/">
            <img height="70px" src={logo} alt="" />
          </Link>
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
                <Link className="nav-link text-black fs-4" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black fs-4" to="/about">
                  About Us
                </Link>
              </li>
              {/* <li className="nav-item">
                                <Link className="nav-link" to='/contact' >Contact Us</Link>
                            </li> */}
              {/* {
                                isLogin && <li className="nav-item">
                                    <Link to="dashboard" className="nav-link" >Dashboard</Link>
                                </li>
                            } */}

              {/* {isLogin && */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-black fs-4"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Decorations
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item text-black fs-6" to="/gatedecoration">
                      Gate Decorations
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-black fs-6" to="/stage">
                      Stage Decorations
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-black fs-6" to="/hall">
                      Hall Decorations
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-black fs-6" to="/photoshoot">
                      Photoshoot Decorations
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item text-black fs-6" to="/selected">
                      Selected Items
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-black fs-6" to="/submititem">
                      Choice List
                    </Link>
                  </li>
                </ul>
              </li>



            </ul>
            {/* {/*{<!-- <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> -->} */}
          </div>

          <div className="nav-item">
            {/* {/*{<!-- Button trigger modal -->} */}
            <button
              type="button"
              className="btnsr"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Send <br /> Message
            </button>
          </div>
          <div className="nav-item">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {!isLogin && (
                <li className="nav-item">
                  <Link to="login" className="nav-link text-black fs-4">
                    Login
                  </Link>
                </li>
              )}
              {isLogin && (


                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-black fs-4"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Welcome <UserName />
                  </Link>
                  <ul className="dropdown-menu text-black fs-6">
                    <li>
                      <Link className="dropdown-item" to="/userDetails">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-black fs-6" to="/editprofile">
                        Edit Profile
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        onClick={handleLogout}
                        style={{ cursor: "pointer" }}
                        className="dropdown-item text-black fs-6"
                      >
                        Log Out
                      </Link>
                      {/* <p>{user_email}</p> */}
                    </li>

                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* {/*{<!-- Modal -->} */}
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
              <p className="modal-title mx-auto titleclr" id="exampleModalLabel">
                <span className="title text-center d-block fs-1">
                  Request A Callback
                </span>{" "}
                <span>
                  We can call you in 30 seconds, just enter your number below
                </span>
              </p>
              <br />
            </div>
            <p className="titleclr"></p>
            <div className="modal-body">
            {/* <form ref={form} onSubmit={sendEmail}>
              <label className="form-label">Name</label>
              <input className="form-control" type="text" name="user_name" />
              <label className="form-label">Email</label>
              <input className="form-control" type="email" name="user_email" />
              <label className="form-label">Message</label>
              <textarea className="form-control" name="message" />
              <input
                className="btn btn-outline-primary my-4"
                type="submit"
                value="Send Email"
              />
            </form> */}
              <form id="myForm" ref={form} onSubmit={sendEmail}>
                {/* {/*{<!-- <label className="form-control" for="name">Name:</label> -->} */}
                <input
                  className="form-control mb-2"
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Name*"
                  required
                />
                {/* {/*{<!-- <label className="form-control" for="email">Email:</label> -->} */}
                <input
                  className="form-control mb-2"
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="email@gmail.com"
                  required
                />
                {/* {/*{<!-- <label className="form-control" for="phone">Phone:</label> -->} */}
                <input
                  className="form-control mb-2"
                  type="tel"
                  id="message"
                  name="message"
                  placeholder="01777777777"
                  required
                />


                <input className="btn btn-outline-secondary w-100 mb-2 text-center mx-auto" type="submit"
                value="Send Email" />


              </form>
            </div>
            <div className="modal-footer">
              {/* {/*{<!-- <button type="button" className="btn btn-primary">Save changes</button> -->} */}
            </div>
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
      <footer className="text-center text-lg-start bg-white text-muted">
        {/*{<!-- Section: Social media -->} */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/*{<!-- Left -->} */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/*{<!-- Left -->} */}

          {/*{<!-- Right -->} */}
          <div>
            <a href="" className="me-4 fclr ">
              <FaFacebook size={30} color="#BE9A82" />
            </a>
            <a href="" className="me-4 link-secondary">
              <FaTwitter size={30} color="#BE9A82" />
            </a>
            <a href="" className="me-4 link-secondary">
              <FaGoogle size={30} color="#BE9A82" />
            </a>
            <a href="" className="me-4 link-secondary">
              <FaInstagram size={30} color="#BE9A82" />
            </a>
            <a href="" className="me-4 link-secondary">
              <FaLinkedin size={30} color="#BE9A82" />
            </a>
            <a href="" className="me-4 link-secondary">
              <FaGithub size={30} color="#BE9A82" />
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
                  Wedding Solutions is a professional event-planning and
                  catering service that organizes both corporate and personal
                  events. We’ll make your special day long-remembered!
                </p>
              </div>
              {/*{<!-- Grid column -->} */}

              {/*{<!-- Grid column -->} */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/*{<!-- Links -->} */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Engagement
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Corporate Event
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Business Meeting
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Birthday Party
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
                  273/7 Shenpara Parbata Dhaka-1216
                </p>
                <p>
                  <FaEnvelope size={20} />
                  tech2click@example.com
                </p>
                <p>
                  <FaPhone size={20} /> +88 01 234 567 88
                </p>
                <p>
                  <FaPrint size={20} /> +88 01 234 567 89
                </p>
              </div>
              {/*{<!-- Grid column -->} */}
            </div>
            {/*{<!-- Grid row -->} */}
          </div>
        </section>
        {/*{<!-- Section: Links  -->} */}

        {/*{<!-- Copyright -->} */}
        <div className="text-center p-4" style={{ backgroundColor: bgclr1 }}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="">
            Md Mostak Ahmed
          </a>
        </div>
        {/* {/*{<!-- Copyright -->} */}
      </footer>
      {/* {/*{<!-- Footer -->} */}
    </div>
  );
};
