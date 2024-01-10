import React from "react";
import Service from "./Service";

import dna from "../../../assets/img/dna.jpeg";
import full from "../../../assets/img/full.jpg";

export const Comprehensive = () => {
  return (
    <>
      <div className="aw-vitamine">
        <div class="aw-comprehensive">
          <div class="aw-position-absolute top-50 start-50 translate-middle p-3">
            <h5 class="text-white aw-overlay-text fs-1" data-aos="fade-right">
              {" "}
              Full body comprehensive exam
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
                <h3 data-aos="fade-left">
                  What is full body comprehensive exam?
                </h3>
                <div className="fs-5 text-muted">
                  A full-body exam is vital for assessing a patient’s overall
                  health. It includes lab tests, imaging studies, and a physical
                  examination by a healthcare provider. This exam is sometimes
                  called a comprehensive physical exam checkup. Healthcare
                  providers check a patient’s blood pressure, heart rate, and
                  other vital signs. As well as examine organs and body systems
                  for signs of disease or dysfunction during the checkup.
                  Additional tests or procedures, such as mammograms, prostate
                  exams, or colonoscopies, may be included based on age, sex,
                  and medical history. A medical professional uses this process
                  to thoroughly check the body of a patient for the root cause
                  of disease. Gathering comprehensive information about a
                  patient’s health, medical and family history can help identify
                  potential health issues sooner for earlier treatment. Adding
                  this information to the patient’s medical record can also help
                  guarantee continuity of care and enhance communication between
                  healthcare providers.
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center d-flex align-items-center justify-content-center">
                  <img
                    src={dna}
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
                    src={full}
                    alt="vitamin-07"
                    className="img-fluid rounded-circle"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h2 data-aos="fade-left">
                  Why do we promote Full Body Comprehensive Exam?
                </h2>
                <div className="fs-5 text-muted">
                  Regular physical exams help maintain good health and detect
                  potential health issues early. They allow patients to discuss
                  health concerns and get a thorough evaluation, which
                  establishes a baseline for future assessments. Physical exams
                  also help to build a strong doctor-patient relationship and
                  are recommended at least once a year, especially for those
                  over 50.
                  <div className="mt-5 px-4">
                    <ul>
                      <li> Check for the root cause of disease</li>
                      <li> Check for possible disease</li>
                      <li>
                        Identify issues that could be concerning in the future{" "}
                      </li>
                      <li> Update necessary immunizations</li>
                      <li>Discuss dietary and exercise routines </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-success py-5 opacity-75 text-white">
            <h2 className="text-center fw-bold">What to expect from your full body comprehensive exam?</h2>
          <div className="container fs-5">
            Physical exams are a crucial aspect of maintaining good health.
            These exams provide a detailed look at your body and help identify
            any potential health concerns. They are typically performed during
            routine office visits and can include a range of tests and
            screenings. These exams serve a variety of purposes, including
            checking for signs of disease, identifying potential health
            concerns, and updating necessary immunizations. <br /> During a physical
            exam, your doctor will ask about your medical history, including any
            past illnesses or surgeries and any medications you are currently
            taking. They will then perform a thorough physical examination,
            which may include checking your vital signs such as blood pressure,
            heart rate, and temperature. <br /> Depending on your age, gender, and
            other risk factors, your doctor may recommend additional screenings
            or tests. For women, this may include a mammogram, pap smear, pelvic
            exam, cholesterol test, and osteoporosis screening. For men, this
            may include a cholesterol test, prostate cancer screening,
            testicular exam, and abdominal aortic aneurysm screening. <br /> Blood
            draws may also be completed during the physical exam, with samples
            sent to a lab for further analysis. It is important to share any
            vitamin or holistic regimen you are taking with your doctor, as
            these can interfere with certain medications or tests. <br /> Physical
            exams are an opportunity to discuss any health concerns or symptoms
            you may be experiencing. This open communication with your doctor
            can help identify any potential health issues early on, increasing
            the chances of successful treatment.
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

export default Comprehensive;
