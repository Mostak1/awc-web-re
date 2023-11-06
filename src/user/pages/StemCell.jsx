import React from "react";
import "./Page.css";
import img1 from "../../assets/img/stem_01.jpg";
import img2 from "../../assets/img/stem_02.jpg";
import img3 from "../../assets/img/stem_03.jpg";

export default function StemCell() {
  return (
    <>
      <div className="aw_stemcell">
        <div className="container my-5">
          <div className="fnt2 text-center">
            Make the Rest of Your Life the Best of Your Life
          </div>
          <div className="">
            Renewal Therapy is a simple, safe, regenerative therapy that can
            stimulate and strengthen your body’s internal repair system.
          </div>
        </div>
        <div className="bg-white">
          <div className="container">
            <div className="row row-col-2 g-3 my-5">
              <div className="col my-5">
                <div className="row">
                  <div className="col-3">
                    <img src={img1} alt="" />
                  </div>
                  <div className="col-9">
                    <div className="fnt2">Regenerative</div>
                    <div className="">
                      The power that created you is the power that can heal you
                      thanks to Renewal Therapy.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <img src={img2} alt="" />
                  </div>
                  <div className="col-9">
                    <div className="fnt2">Anti-Inflammatory</div>
                    <div className="">
                      Renewal Therapy’s powerful anti-inflammatory properties
                      reduce inflammation in the body.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <img src={img3} alt="" />
                  </div>
                  <div className="col-9">
                    <div className="fnt2">Immunomodulatory</div>
                    <div className="">
                      Renewal Therapy modulates the body’s immune response.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col my-5">
                <div className="fnt2">Stem Cells Made Simple</div>
                <div className="">
                  Stem Cells Made Simple takes the complicated, controversial,
                  and often confusing subject of stem cell therapy and makes it
                  easy to learn, easy to understand, and easy to access. <br />
                  <br />
                  Fill out the form below for your FREE copy of this amazing
                  book (we will also send you an email with a direct link for
                  easy future access).
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="container my-5">
          <div className="fnt2 text-center aw_clr">
            Frequently Asked Questions
          </div>
          <div className="text-center aw_clr">
            Commonly asked questions regarding regenerative wellness and renewal
            therapy.
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What are the benefits of WBRx Renewal Therapy?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Renewal Therapy regenerates, rebuilds, and repairs damaged
                  cells. Renewal Therapy can be given to anyone regardless of
                  age and blood type. It is simple, safe, accessible, and
                  affordable.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Will Renewal Therapy reduce inflammation?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  The root or foundation of all sicknesses, diseases, illnesses,
                  and aging is simply – degeneration. Many people have heard
                  that inflammation is at the core of it all. Although this is
                  not altogether incorrect, it is, however, incomplete. What is
                  inevitably at the core of inflammation is degeneration.
                  Renewal Therapy regenerates degeneration.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What is Degeneration?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Degeneration means to deteriorate both physically or mentally,
                  go into despair, fall apart and breakdown – to be less than
                  your former self.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse4"
                  aria-expanded="false"
                  aria-controls="flush-collapse4"
                >
                 What is Regeneration?
                </button>
              </h2>
              <div
                id="flush-collapse4"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                Regeneration means to build, grow, repair or create new tissue (something your body is designed to do.)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
