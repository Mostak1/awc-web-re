import React from "react";
import vitaminebg01 from "../../../assets/img/vitamin-bg.jpg";
import vitamin7 from "../../../assets/img/vitamin-7.jpg";
import vitamin8 from "../../../assets/img/vitamin-8.jpg";
import { Link } from "react-router-dom";
import Service from "./Service";

export const Vitamin = () => {
  return (
    <div className="aw-vitamine">
      <div class="image-container">
        {/* <img src="https://integmeds.com/wp-content/uploads/2023/03/five-best-vitamins-for-beautiful-skin-products-with-royalty-free-image-950368148-1547504059.jpg" class="w-100" alt="Image" /> */}
        <div class="aw-position-absolute top-50 start-50 translate-middle p-3">
          <h5 class="text-white aw-overlay-text fs-1" data-aos="fade-right">
            {" "}
            Vitamin Shots (Intramuscular, IM)
          </h5>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="mx-5 my-4">
          <div className="row g-4">
            <div className="col-md-3">
              <Service/>
            </div>
            <div className="col-md-5 fs-4 text-muted">
              IM vitamin therapy in Houston Texas is a way of delivering
              nourishing vitamins, minerals, antioxidants, amino acids and more,
              right to a person’s blood stream. It’s a faster, more efficient
              way to help your body get the benefits! <br /> <br />
              For example our high-dose vitamin C therapy and other IV vitamin
              treatments can be up to 100x more effective than oral ingestion of
              these same vitamins. This is because it completely bypasses the GI
              tract, which can block absorption of some nutrients. Instead,
              intravenous delivery distributes vitamins and nutrients directly
              to the cells they benefit.
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
                  src={vitamin8}
                  alt="vitamin-07"
                  className="img-fluid rounded-circle"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 data-aos="fade-left">
                Who Benefits from IV Vitamin Therapy?
              </h2>
              <div className="fs-4 text-muted">
                Anyone can benefit from intravenous therapy! Because it’s
                introduced directly to the bloodstream, this treatment works at
                a cellular level. It immediately effective, vitalizing,
                regenerating and recovering optimal cellular function. <br />{" "}
                <br />
                Our IV vitamin cocktail treatments have helped patients of all
                types experience positive change. Some of the conditions we’ve
                worked to treat include:
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="vitaminbg2">
        <div class="aw-position-absolute top-50 start-50 translate-middle p-3">
          <h5 class="text-white aw-overlay-text">
            {" "}
            High-dose vitamin C therapy has also been shown to fight against
            serious infections, which is why they’re standard protocol at the
            Mayo clinic for ICU patients with sepsis. They can also boost your
            immune system to help you better defend against illness. Ongoing
            studies have even shown IV vitamin treatments to attack cancerous
            cells!
          </h5>
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
export default Vitamin;
