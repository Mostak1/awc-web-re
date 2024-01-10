import React from "react";
import Service from "./Service";
import per1 from "../../../assets/img/sup1.jpg";
import per2 from "../../../assets/img/sup2.jpg";

export const NaturalSupplement = () => {
  return (
    <div className="aw-vitamine">
      <div class="aw-supplement">
        <div class="aw-position-absolute top-50 start-50 translate-middle p-3">
          <h5 class="text-white aw-overlay-text fs-1" data-aos="fade-right">
            {" "}
            Natural Supplementation
          </h5>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="mx-5 my-4">
          <div className="row g-4">
            <div className="col-md-3 aw-mid-none">
              <Service />
            </div>
            <div className="col-md-5 fs-5 text-muted">
              Natural supplements have been gaining popularity as more people
              are looking for ways to improve their health and wellbeing. These
              supplements are made from natural sources, such as plants and
              herbs, and are considered a great way to get essential vitamins
              and minerals without the use of synthetic or chemical-based
              products. Unlike prescription medications, which can come with a
              long list of potential side effects, natural supplements are
              generally safe for most people when used as directed. They are
              also available without a prescription, making them accessible to
              anyone who wants to try them. One of the biggest advantages of
              natural supplements is that they allow you to get concentrated
              amounts of vitamins and minerals in one easy-to-take pill or
              capsule. This can be especially beneficial for people who have
              busy lifestyles or who may not have the time to prepare healthy
              meals every day.
            </div>
            <div className="col-md-4">
              <div className="text-center d-flex align-items-center justify-content-center">
                <img src={per1} alt="vitamin-07" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 my-2">
            <div className="col-md-6">
              <div className="text-center d-flex align-items-center justify-content-center">
                <img src={per2} alt="vitamin-07" className="img-fluid " />
              </div>
            </div>
            <div className="col-md-6 my-4  fs-5 text-muted">
              Another advantage of natural supplements is that they allow you to
              get vitamins and minerals from plant foods that you may not have
              access to. For example, if you live in an area where certain
              fruits and vegetables are not available or are too expensive, you
              can still get the nutrients you need by taking a natural
              supplement made from those same plants. <br /> <br />
              It is important to note, however, that not all natural supplements
              are created equal. Some may contain fillers or other additives
              that can diminish their effectiveness or cause unwanted side
              effects. It is important to choose supplements that are made by
              reputable companies and that have been tested for purity and
              potency. <br />
              <br /> It is also important to talk to your healthcare provider
              before starting any new supplement regimen. They can help you
              determine which supplements are right for you based on your
              individual health needs and any medications you may be taking.
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
export default NaturalSupplement;
