import React from "react";
import "./Home.css";
/***************
 * image imports
 ****************/
import logo from "../../assets/img/Logo.png";
import img1 from "../../assets/img/awc_01.jpg";
import img2 from "../../assets/img/awc_02.jpg";
import img4 from "../../assets/img/awc_04.png";
import img3 from "../../assets/img/mt-1993-brand-img03.png";


import img6 from "../../assets/img/awc_06.png";
import img7 from "../../assets/img/awc_07.png";
import img8 from "../../assets/img/mt-1993-img05.jpg";
import img9 from "../../assets/img/mt-1993-img06.jpg";

export const Home = () => {
  return (
    <div className="aw_home">
      <div className="image">
        <div className="container container1 py-auto btext">
          <p className=" text-center fs1 fnt2">
            Welcome to American Wellness Center
          </p>
          <p className=" text-center fs2 fnt2">The Best Preventive Solutions</p>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fnt2 aw_head">At a Glance</h1>
            <p className="fs-4">
              We search the root cause of illness with a comprehensive full-body
              physical exam and analyze lab results and reports. Then, We advise
              an integrative approach with modern allopathic medicine as well as
              evidence-based natural functional medicine to recover the
              malfunctioning of the body organs with an integrated approach. We
              also guide individualized diet and lifestyle modification to
              regain perfect health.
            </p>
            <h3 className="fnt3 mb-5"></h3>
            {/*
            <div className="mx-auto text-center">

              <span className="me-4">Golf Club</span>
              <span className="me-4">Sena Malancha</span>
              <span className="me-2">BGB Convension Hall</span>
              <div className="row">
                <div className="col"><img src={logo} alt="" /></div>
                <div className="col"><img src={img2} alt="" /></div>
                <div className="col"><img src={img3} alt="" /></div>
              </div>
            </div> */}
          </div>
          <div className="col-md-6 text-center">
            <div className="fnt3 my-3 aw_head1">Who We Are</div>
            <img src={logo} className="mt-5" height={250} alt="" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="event_perfect align-middle">
        <div className="container item">
          <div className="row row-cols-1 row-cols-md-3 g-5">
            <div className="col">
              <div className="aw_card h-100">
                <img src={img4} height={300} class="card-img-top" alt="..." />
                <div class="card-body text-center my-4">
                  <p class="card-text">
                    We believe in the use of minimum modern medicine and a
                    natural non-invasive integrative approach to restore health
                    without side effects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="aw_card h-100">
                <img src={img6} height={300} class="card-img-top" alt="..." />
                <div class="card-body text-center my-4">
                  <p class="card-text">
                  We believe that everyone must be educated in how to heal themselves and others.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="aw_card h-100">
                <img src={img7} height={300} class="card-img-top" alt="..." />
                <div class="card-body text-center my-4">
                  <p class="card-text">
                  We believe that the right to heal belongs to everyone who sincerely desires and manifests it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aw_midtitle">
            <div className="container text-center">
            We search for the root causes of each person’s illness. Healing mind, body, and soul with an individualized protocol. Evidence-based integrative & functional medicine. In-depth lifestyle change counseling and nutritional coaching
            </div>
      </div>
      <div className="container my-4">
        <div className="row programme_img">
          <div className="col-md-6">
            <h3 className="fnt3 my-4">
              ----We are premier catering and event planning company
            </h3>
            <div className="">
              <img src={img6} className="img-fluid" alt="Responsive image" />
              <p className="business_p">Business Dinners and Meetings</p>
              <img src={img7} className="img-fluid" alt="Responsive image" />
              <p className="business_p">Corporate Event Management</p>
            </div>

            <br />
          </div>
          <div className="col-md-6">
            <div className="">
              <img src={img8} className="img-fluid" alt="" />
              <p className="business_p">Engagement and Wedding Parties</p>
              <img src={img9} className="img-fluid" alt="" />
              <p className="business_p">Birthday and Graduation Parties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
