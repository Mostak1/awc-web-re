import React from "react";
import vitamin7 from "../../../assets/img/vitamin-7.jpg";
import vitamin8 from "../../../assets/img/vitamin-8.jpg";
import ozon1 from "../../../assets/img/ozon1.png";

import Service from "./Service";

export const OzonTherapy = () => {
  return (
    <div className="aw-vitamine">
      <div class="aw-ozon">
        {/* <img src="https://integmeds.com/wp-content/uploads/2023/03/five-best-vitamins-for-beautiful-skin-products-with-royalty-free-image-950368148-1547504059.jpg" class="w-100" alt="Image" /> */}
        <div class="aw-position-absolute top-50 start-50 translate-middle p-3">
          <h5 class="text-white aw-overlay-text fs-1" data-aos="fade-right">
            {" "}
            Ozone Therapies
          </h5>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="mx-5 my-4">
          <div className="row g-4">
            <div className="col-md-3 aw-mid-none">
              <Service />
            </div>
            <div className="col-md-5  ">
              <h3>Medical Ozone IV THERAPY</h3>
              <div className="fs-4 text-muted">
                Medical Ozone Therapy is used to detox, kill infection treat
                disease, boost the immune system and improve the body’s intake
                and use of oxygen
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center d-flex align-items-center justify-content-center">
                <img
                  src={vitamin7}
                  alt="vitamin-07"
                  className="img-fluid rounded-circle"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="text-center d-flex align-items-center justify-content-center">
                <img
                  src={ozon1}
                  alt="vitamin-07"
                  className="img-fluid rounded-circle"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 data-aos="fade-left">HOW DOES MEDICAL OZONE WORK</h2>
              <div className="fs-4 text-muted">
                We create medical grade ozone (03) by using medical oxygen (02)
                and an electromagnetic charged ion machine to attach O to the 02
                (00) + 02) = 03) During an Ozone treatment, blood is withdrawn
                and mixed with normal saline and ozone gas. The 03 quickly turns
                back into O and 02 as it mixes with blood and saline, and an IV
                drip returns the hyper-oxygenated fluid back into the
                bloodstream, This will help modulate immune responses. <br /> Our IV
                vitamin cocktail treatments have helped patients of all types
                experience positive change. Some of the conditions we’ve worked
                to treat include:
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div class="container">
        <div class="">
          <h5 class="my-5 text-center ">
            {" "}
            <h2>CONTACT US</h2>
            <h3>How We Can Help You</h3>
            To make an appointment call us +8809666-747470
          </h5>
        </div>
      </div>
    </div>
  );
};

export default OzonTherapy;
