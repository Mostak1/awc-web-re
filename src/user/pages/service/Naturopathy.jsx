import React from "react";
import Service from "./Service";

import nutri9 from "../../../assets/img/nutri-9.jpg";
import nutri8 from "../../../assets/img/nutri-8.jpg";
import natur from "../../../assets/img/natur.jpg";
import haram from "../../../assets/img/harm.png";
import healing from "../../../assets/img/healing.jpeg";
import causam from "../../../assets/img/causam.jpeg";
import totum from "../../../assets/img/totum.png";
import docera from "../../../assets/img/docera.jpeg";
import praevenire from "../../../assets/img/praevenire.jpeg";
import img1 from "../../../assets/img/image-integmed-1024x582.jpg";

export const Naturopathy = () => {
  return (
    <>
      <div className="aw-vitamine">
        <div class="aw-naturopathy">
          <div class="aw-position-absolute top-50 start-50 translate-middle p-3">
            <h5 class="aw-overlay-text fs-1" data-aos="fade-right">
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
                <h3>Nutritional Counseling</h3>
                <div className="fs-5 text-muted">
                  With the proper nutritional counseling and supplementation we
                  strive to assist the body’s healing process through natural
                  means without surgery or drugs. The right dietary choices have
                  been proven to be the primary way to develop a disease free
                  body as well as the maintenance of perfect health. Our
                  holistic and functional nutritionists guide and train our
                  patients towards evidence based dietary changes. We create
                  meal plans for patients to help with chronic and acute health
                  problems. The impact of diet and nutritional counseling is
                  being used for overall wellness by improving mood imbalances,
                  overweight and/or obesity, physical and mental health
                  conditions. There are many ways to benefit from nutrition
                  counseling, whether it’s a complete dietary assessment,
                  managing a medical condition, or even wanting to fine tune
                  your food choices. Nutrition counseling may be exactly what
                  you need to
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center d-flex align-items-center justify-content-center">
                  <img
                    src={nutri9}
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
                    src={nutri8}
                    alt="vitamin-07"
                    className="img-fluid rounded-circle"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="fs-5 text-muted">
                  <p>
                    help flip your health around and start seeing significant
                    improvements in physical, emotional, and internal body
                    function.
                  </p>
                  <p>
                    No focus on optimal health is complete without special
                    consideration for proper nutrition and supplementation. At
                    Between the Bridges, you’ll find that we emphasize knowing
                    and meeting your body’s nutritional and immune system needs.
                  </p>
                  <p>
                    In addition to designing a customized supplementation
                    program, we provide the actual supplements.
                  </p>
                  <p>
                    We carry many categories of supplements, including metabolic
                    support, immune system boosters, detoxification, essential
                    fatty acids, brain health, gastrointestinal health, stress
                    management, as well as numerous orthomolecular options.
                    These special formulations are safe, effective, and
                    clinically certified for purity and effectiveness.
                  </p>
                </div>
              </div>
            </div>
            <div className="fs-5 text-muted">
              Your prescription will be formulated by Dr. Jeffrey Kotulski who,
              in addition to his training as an osteopathic medicine physician,
              has spent years studying the use of nutrition supplementation for
              optimal health. <br /> So few of us get all the nutrients our
              bodies need. Why not make sure you know exactly what you’re
              missing so you can enjoy good health and peak performance? Call
              Between the Bridges Healing Center in Mankato, Minnesota, at (507)
              388-7488 to find out more. Or use our convenient online
              appointment request form to schedule your consultation.
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
        <div className="bg-white p-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="text-center d-flex align-items-center justify-content-center">
                  <img
                    src={natur}
                    alt="vitamin-07"
                    className="img-fluid rounded-circle"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h3 data-aos="fade-left">What is Naturopathy?</h3>
                <div className="fs-5 text-muted">
                  Naturopathy is a form of medicine that has been in the United
                  States for more than 100 years. Natural Doctor’s acknowledge
                  and work to assist the self-healing process in every
                  individual. They seek to identity and eliminate the underlying
                  cause of illness, rather than to simply eliminate or suppress
                  symptoms. ND’s emphasize education and encourage self
                  responsibility for health. A doctor of naturopathy is a
                  teacher. Each patient is seen as a whole person that has
                  “individual” physical, mental, genetic, spiritual,
                  environmental and social factors and needs. ND’s recognize the
                  importance of disease prevention. The correct interventions
                  and support programs are the key to creating and maintaining
                  optimal health.
                </div>
              </div>
            </div>
            <div className="my-5">
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col ">
                  <div class="card shadow  h-100">
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <div className="text-center">
                      <img
                        src={haram}
                        alt="vitamin-07"
                        className=" w-50 mt-2 rounded-circle"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title fs-4 fw-bold">
                        First, Do No Harm (Primum Non Nocere)
                      </h5>
                      <p class="card-text">
                        Naturopathic medicine uses therapies that are safe and
                        effective. Since the goal is to identify and treat the
                        cause, naturopathic physicians avoid, and consider
                        harmful, treatments that obscure the cause by
                        suppressing symptoms.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col ">
                  <div class="card shadow  h-100">
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <div className="text-center">
                      <img
                        src={healing}
                        alt="vitamin-07"
                        className=" w-50 mt-2 rounded-circle"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title fs-4 fw-bold">
                        The Healing Power of Nature (Vis Medicatrix Naturae)
                      </h5>
                      <p class="card-text">
                        Naturopathic medicine uses therapies that are safe and
                        effective. Since the goal is to identify and treat the
                        cause, naturopathic physicians avoid, and consider
                        harmful, treatments that obscure the cause by
                        suppressing symptoms.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col ">
                  <div class="card shadow  h-100">
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <div className="text-center">
                      <img
                        src={causam}
                        alt="vitamin-07"
                        className=" w-50 mt-2 rounded-circle"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title fs-4 fw-bold">
                        Identify and Treat the Causes (Tolle Causam)
                      </h5>
                      <p class="card-text">
                        Symptoms are viewed as expressions of the body’s natural
                        attempt to heal. Naturopathic physicians seek and treat
                        the underlying cause of a disease. The origin of disease
                        is removed or treated so the patient can recover.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col ">
                  <div class="card shadow  h-100">
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <div className="text-center">
                      <img
                        src={totum}
                        alt="vitamin-07"
                        className=" w-50 mt-2 rounded-circle"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title fs-4 fw-bold">
                        Treat the Whole Person (Tolle Totum)
                      </h5>
                      <p class="card-text">
                        The human body, mind, and spirit are fully integrated
                        aspects of a person’s overall being. Each patient is a
                        unique whole, and requires individualized and
                        comprehensive consideration for healing to occur.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col ">
                  <div class="card shadow  h-100">
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <div className="text-center">
                      <img
                        src={docera}
                        alt="vitamin-07"
                        className=" w-50 mt-2 rounded-circle"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title fs-4 fw-bold">
                        Doctor as Teacher (Docere)
                      </h5>
                      <p class="card-text">
                        The naturopathic physician’s most important role is to
                        empower the patient to reclaim agency over his or her
                        own health. The physician strives to instill the patient
                        with hope and knowledge. Ultimately, it is the patient
                        not the physician who achieves healing.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col ">
                  <div class="card shadow  h-100">
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <div className="text-center">
                      <img
                        src={praevenire}
                        alt="vitamin-07"
                        className=" w-50 mt-2 rounded-circle"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title fs-4 fw-bold">
                        Prevention Beats Cure (Praevenire)
                      </h5>
                      <p class="card-text">
                        As Benjamin Franklin said, “An ounce of prevention is
                        worth a pound of cure.” Naturopathic physicians shift
                        the emphasis from fighting disease to building and
                        maintaining good health. The ultimate goal of
                        naturopathic medicine is prevention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="text-center d-flex align-items-center justify-content-center">
                    <img
                      src={natur}
                      alt="vitamin-07"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 data-aos="fade-left fw-bold">Lifestyle Coach</h3>
                  <div className="fs-5 text-muted">
                    Lifestyle or habit changes are behavior modifications that
                    encourage positive outcomes in your life. These are
                    important fundamental components to any wellness program you
                    seek. To maintain physical and emotional balance, lifestyle
                    modifications and alterations of long term habits is very
                    crucial. <br />
                    The lack of exercise, inadequate sleep, smoking, excessive
                    alcohol, stress and mental illness require deliberate
                    management. Maintenance of these interventions provide
                    individuals with potential to decrease the risk of most
                    underlying causes of chronic health conditions.
                  </div>
                </div>
              </div>
              <div className="col my-5 fs-5 text-muted">
                Increased physical activity is critical to the body, not only
                does it help with weight loss but also helps regulate and manage
                diseases like diabetes and high cholesterol. Ensuring daily
                adequate sleep is also essential in regulation of stress and
                reduction of inflammation which have both been shown to be a
                cause that many individuals are suffering through today. The
                management of smoking and alcohol are other essential lifestyle
                modifications that will alter how an individual’s overall health
                and wellness looks like. These lifestyle modifications will make
                it attainable for individuals to reach the life they desire.
              </div>
              <div className="my-5">
                <img src={img1} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Naturopathy;
