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
import img8 from "../../assets/img/awc_08.jpg";
import img9 from "../../assets/img/mt-1993-img06.jpg";

import { FaMicroscope, FaDochub } from "react-icons/fa";

// fontawsome Icon

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faUserDoctor,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div className="aw_home">
      <div className="image">
        <div className="container container1 py-auto btext">
          <p className=" text-center fs1 fnt2" data-aos="fade-up">
            Welcome to American Wellness Center
          </p>
          {/* <p className=" text-center fs2 fnt2 pb-3" data-aos="fade-down">
            The Best Preventive Solutions
          </p> */}
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fnt2 aw_head">At a Glance</h1>
            <p className="fs-4 fw-medium" data-aos="zoom-in">
              We search the root cause of illness with a comprehensive full-body
              physical exam and analyze lab results and reports. Then, We advise
              an integrative approach with modern allopathic medicine as well as
              evidence-based natural functional medicine to recover the
              malfunctioning of the body organs with an integrated approach. We
              also guide individualized diet and lifestyle modification to
              regain perfect health.
            </p>
            <h3 className="fnt3 mb-5"></h3>
          </div>
          <div className="col-md-6 text-center">
            <div className="fnt3 my-3 aw_head1">Who We Are</div>
            <img
              src={logo}
              className="mt-5"
              data-aos="zoom-out"
              height={250}
              alt=""
            />
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
                <img
                  src={img4}
                  height={300}
                  data-aos="zoom-out"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center my-4">
                  <p class="card-text" data-aos="slide-up">
                    We believe in the use of minimum modern medicine and a
                    natural non-invasive integrative approach to restore health
                    without side effects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="aw_card h-100">
                <img
                  src={img6}
                  height={300}
                  data-aos="zoom-out"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center my-4">
                  <p class="card-text" data-aos="slide-up">
                    We believe that everyone must be educated in how to heal
                    themselves and others.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="aw_card h-100">
                <img
                  src={img7}
                  height={300}
                  data-aos="zoom-out"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center my-4">
                  <p class="card-text" data-aos="slide-up">
                    We believe that the right to heal belongs to everyone who
                    sincerely desires and manifests it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aw_midtitle">
        <div className="container text-center" data-aos="zoom-out">
          We search for the root causes of each person’s illness. Healing mind,
          body, and soul with an individualized protocol. Evidence-based
          integrative & functional medicine. In-depth lifestyle change
          counseling and nutritional coaching
        </div>
      </div>

      <div className="container">
        <div className="aw_scard">
          <div className="row">
            <div className="col-md-4">
              <img className="img-fluid" src={img8} alt="" />
            </div>
            <div className="col-md-8">
              <div className="text-center fs2 fnt2 aw_clr">
                Why People Trust Us
              </div>
              <div className="mx-4 fs-5">
                We are rated the best Integrative and Functional Medicine clinic
                in the United States of America. We have the best
                board-certified naturopathic doctors and licensed by Guardian of
                Ecclesial Medical Association (GEMA). Our comprehensive physical
                exam and lab results help us find the root causes of today’s
                health problems!
              </div>
              <div className="row row-cols-2 g-4 mx-3 mt-4">
                <div className="col fs-4  aw_clr">
                  <FaMicroscope /> Full body Comprehensive exam
                </div>
                <div className="col fs-4  aw_clr">
                  <FontAwesomeIcon icon={faUserDoctor} /> Evidence based Natural
                  & Functional Medicine
                </div>
                <div className="col fs-4  aw_clr">
                  <FontAwesomeIcon icon={faHandHoldingHeart} beat /> Effective
                  Natural Therapies
                </div>
                <div className="col fs-4  aw_clr">
                  <FontAwesomeIcon icon={faFlask} /> IV Therapy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="aw_head1 fs-1 my-3">
          Problems we can fix. Holistically
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
          <div className="col">
            <div className="aw_card text-center h-100">
              <h3>GUT</h3>
              Food Allergy/Sensitivity <br /> Asthma <br /> Arthritis/Gout{" "}
              <br />
              Cough/Chronic Constipation/Diarrhea <br /> SIFO/SIBO <br />
              Dermatitis/Eczema Leaky Gut Irritable Bowel Syndrome Acid Reflux
              Crohn’s / <br />
              Colitis <br /> Irritable Bowel Syndrome
            </div>
          </div>
          <div className="col">
            <div className="text-center aw_card h-100">
              <h3>HORMONES</h3>
              Chronic Stress/Anxiety <br />
              Endometriosis/Ovarian Cysts/PCOS <br />
              Hypothyroidism/HPA Dysfunction <br />
              Ovarian/Breast Tumor/Polyp <br /> Menopause / Peri Menopause
              Adrenal <br /> Dysregulation/Fatigue Weight <br />
              Management Osteoarthritis/Osteoporosis
              <br />
              Sexual Health
            </div>
          </div>
          <div className="col">
            <div className="text-center aw_card h-100">
              <h3>CARDIO METABOLIC</h3>
              Cardiovascular Health <br />
              Diabetes/Pre-diabetes High Cholesterol <br /> High Blood Pressure/{" "}
              <br />
              Hypertension Heart Diseases Fatty Liver Disease <br />
              Upper Respiratory Infections <br />
              Obesity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
