import React from "react";
import Service from "./Service";

import food from "../../../assets/img/food.jpg";
import the from "../../../assets/img/the.jpg";

export const Kinesiology = () => {
  return (
    <>
      <div className="aw-vitamine">
        <div class="aw-kinesiology">
          <div class="aw-position-absolute top-50 start-50 translate-middle p-3">
            <h5 class="text-white aw-overlay-text fs-1" data-aos="fade-right">
              {" "}
              Advance Kinesiology / Nutrition Response Testing
            </h5>
          </div>
        </div>
        <div className="bg-white py-5">
          <div className="mx-5 my-4">
            <div className="row g-4">
              <div className="col-md-3 aw-mid-none">
                <Service />
              </div>
              <div className="col-md-5 ">
                <h3 data-aos="fade-left">What is  Applied Kinesiology?</h3>
                <div className="fs-5 text-muted">
                  Applied Kinesiology (AK) or also known as Nutrition Response
                  Testing (NRT) is a safe and non-invasive diagnostic system
                  using muscle testing to evaluate neurological function. NRT is
                  a study of how the different points on the body’s surface
                  relate to health and the flow of energy in every organ and
                  function.This method focuses primarily on neuromuscular
                  function as it is related to the structural, chemical, and
                  neurological regulatory mechanisms. Muscle testing assesses
                  the impact of the nervous system in a patient’s health,
                  helping practitioners look for the source of disease in the
                  balance of the sensory system with the motor system. We
                  believe the use of this method assess nutritional shortcomings
                  and then we suggest supplements based on those deficiencies to
                  help ailments. There are two forms of NRT: analysis and the
                  personalized health improvement program (HIP). This analysis
                  is performed simply by testing neurological reflexes and
                  acupressure points to determine where the underlying weakness
                  is in the body. Once analysis is completed we create a
                  nutritional supplement guide to help fight against those weak
                  areas to bring back strength. The supplements are personalized
                  to work in correcting the deficiency and restore the correct
                  reflexive balance.
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center d-flex align-items-center justify-content-center">
                  <img
                    src={the}
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
                    src={food}
                    alt="vitamin-07"
                    className="img-fluid rounded-circle"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h2 data-aos="fade-left">What can acupuncture treat?</h2>
                <div className="fs-5 text-muted">
                  Acupuncture and TCM are extremely successful in treating a
                  variety of disorders, especially those severe and complex
                  conditions which conventional Western medicine lacks of
                  treatment options. Acupuncture can act as a standalone
                  treatment or as an adjunct to other medical treatment forms.
                  Acupuncture is also often used as preventative medicine with a
                  few times a year for a “tune up” or a “balancing” treatment.
                  Our specialties on the disorders treated with acupuncture
                  (including Chinese herbs) focus on:
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
    </>
  );
};
export default Kinesiology;
