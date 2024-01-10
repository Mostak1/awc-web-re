import React from "react";
import hip8 from "../../../assets/img/hip-8.jpg";
import hip9 from "../../../assets/img/hip-9.jpg";
import hip19 from "../../../assets/img/hip-19.jpg";
import tha from "../../../assets/img/tha.jpg";
import the from "../../../assets/img/the.jpg";

import Service from "./Service";

export const HoustonChiropractor = () => {
  return (
    <div className="aw-vitamine">
      <div class="aw-houston">
        <div class="aw-position-absolute top-50 start-50 translate-middle p-3">
          <h5 class="text-white aw-overlay-text fs-1" data-aos="fade-right">
            {" "}
            Houston Chiropractor
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
              <h3>What is chiropractic?</h3>
              <div className="fs-5 text-muted">
                Chiropractic is a healthcare profession or discipline that
                diagnoses, treats and prevents the mechanical disorders of the
                neuromusculoskeletal system, especially the spine. Chiropractic
                care is capable of improving general health based on the
                theories that these mechanical disorders affect general health
                through the nervous system that exits from the spinal cord
                housed in the spine column.
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center d-flex align-items-center justify-content-center">
                <img
                  src={hip8}
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
                  src={the}
                  alt="vitamin-07"
                  className="img-fluid rounded-circle"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 data-aos="fade-left">What is an adjustment?</h2>
              <div className="fs-5 text-muted">
                Chiropractic manipulation therapy (CMT), also called adjustment,
                is the manipulative technique involving hands-on manipulation of
                the spine or other joints, with hands (manual manipulation),
                and/or via special tables (such as drop tables,
                flexion-extension tables), and/or by using some devices (like
                activator), etc.
              </div>
            </div>
          </div>
          <div className="row g-4 my-5">
            <div className="col-md-6">
              <h2 data-aos="fade-left">Who are chiropractors?</h2>
              <div className="fs-5 text-muted">
                Chiropractic professionals are doctors of chiropractic, DC’s, or
                chiropractors. Although it has many similar attributes of
                primary care physicians (PCPs) for general health, a
                chiropractor is usually considered as a medical specialist like
                a dentist or ophthalmologist. The education that a chiropractor
                receives is very similar to that of a medical doctor (MD). Both
                DC’s and MD’s receive a Bachelor’s degree followed by 3-4 years
                of specialized medical training including internships and
                rotations. Both receive extensive training in the basic sciences
                such as anatomy, physiology, histology, pathology, microbiology,
                radiology and neurology, etc. The two professions begin to
                differ in regards to treatment protocols. Medical doctors focus
                on learning about medications and surgery while chiropractors
                learn to treat with their hands using adjustments, acupuncture
                and soft tissue mobilizations.
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center d-flex align-items-center justify-content-center">
                <img
                  src={tha}
                  alt="vitamin-07"
                  className="img-fluid rounded-circle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="vitaminbg2">
        <div class="aw-position-absolute top-50 start-50 translate-middle p-3">
          <h5 class="text-white aw-overlay-text">
            {" "}
            How is posture related to DJD? Posture is the body position in which
            you hold your body weight against gravity while standing, sitting,
            lying down or moving. Good posture gives you a balanced position
            where body weight is distributed evenly on joints, with the least
            strain on supporting muscles and ligaments, so that your body is
            able to function optimally. Poor posture puts excess stress on the
            joints, increases wear and tear to the joints so that degeneration
            occurs quicker.
          </h5>
        </div>
      </div>
      <div className="bg-white">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="text-center d-flex align-items-center justify-content-center">
                <img
                  src={hip9}
                  alt="vitamin-07"
                  className="img-fluid rounded-circle"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 data-aos="fade-left">How can I achieve good posture?</h2>
              <div className="fs-5 text-muted">
                Postural training can help delay onset of symptoms related to
                DJD. For instance, good standing posture presents when a
                vertical line can be drawn passing through the ears, shoulders,
                hips, knees and ankles. In this position the joints are placed
                under the least amount of stress because the body weight is
                evenly distributed. Good sitting posture occurs when the head is
                positioned directly over the neck, rather than jutting forward.
              </div>
            </div>
          </div>
          <div className="row g-4 my-5">
            <div className="col-md-6">
              <h2 data-aos="fade-left">
                How can young people benefit from posture training?
              </h2>
              <div className="fs-5 text-muted">
                Good posture early in life ensures the healthy development of
                your body and prevents DJD later. Poor posture can be corrected
                before any joint damage is done. Posture training will benefit
                young people greatly by teaching them good habits they can
                maintain for their lifetime.
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center d-flex align-items-center justify-content-center">
                <img
                  src={hip19}
                  alt="vitamin-07"
                  className="img-fluid rounded-circle"
                />
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
export default HoustonChiropractor;
