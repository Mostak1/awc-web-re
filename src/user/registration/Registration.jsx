import React, { useState, useEffect } from "react";
import "./Registration.css";
import img8 from "../../assets/img/mt-1993-img05.jpg";
import logo from "../../assets/img/ws.png";
import { FaFacebook, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../../firebase/FirebaseConfig";

export const Registration = () => {
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, [navigate]);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === rpassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          if (user) {
            const url = "https://mostaksarker.com/API/createuser.php";

            let fData = new FormData();
            fData.append("name", name);
            fData.append("mobile", mobile);
            fData.append("email", email);
            fData.append("address", address);
            fData.append("password", password);

            axios
              .post(url, fData)
              .then((Response) => {
                Swal.fire({
                  icon: "success",
                  title: "Success",
                  text: "User registered successfully.",
                });
              })
              .catch((Error) => {
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "An error occurred while registering the user.",
                });
              });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "The passwords do not match.",
      });
    }
  };

  return (
    <div className=" ">
      <div className="container my-5 ">
        <div className="row regform">
          <div className="col-md-5 p-5">
            <img src={logo} className="simg1 img-fluid" alt="" />
            <p className="text-center fs-1 txclr fnt2">Registration Form</p>
            <form onSubmit={handleRegister}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label for="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  placeholder="mobile no"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <label for="mobile">Mobile</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label for="floatingInput">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="password">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password1"
                  placeholder="Password"
                  value={rpassword}
                  onChange={(e) => setRpassword(e.target.value)}
                />
                <label for="password1">Re-Type Password</label>
              </div>
              <div className="form-floating mb-3">
                <input type="submit" className="aw_button" value="Register" />

                {/* <button type='button' className='btns' onClick={handleSubmit} >Submit</button> */}
              </div>
            </form>
            <div className="text-center mb-3 txclr">
              <div className="">
                Have an Account Go to <Link to="/login">LogIn</Link>
              </div>
              <span></span>
            </div>
          </div>
          <div className="col-md-7">
            <img src={img8} className="simg img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
