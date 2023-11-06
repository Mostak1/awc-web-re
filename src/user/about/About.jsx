import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div>
      <div class="container my-4">
        <h1 class="fnt2 aw_head">About American Wellness Center</h1>
        <div className="">
          American Center For Regenerative Health is rated one of the best
          healthcare center in Bangladesh. Our dedicated care team is composed
          of licensed and accredited medical doctors, nurses, and alternative,
          naturopathic, & functional medicine doctors that work together to
          provide our patients with the best complete and comprehensive
          treatment.
        </div>
        <div className="">
          <ul>
            <li>
              Our care team takes the time to get to know you and your health
              history. During your initial consultation, a full-body physical
              exam and a thorough medical history analysis are performed.
            </li>
            <li>
              We want to get to know your diagnosis, genetics, lifestyle,
              movement patterns, and symptoms. The more we know about your
              health the better we are at identifying the root causes of your
              health issues.
            </li>
            <li>
              Comprehensive lab work and specialty testing, like food
              sensitivity, micro biome, toxic metal, and hormone testing are
              also used to uncover the root cause of your persistent symptoms.
            </li>
          </ul>{" "}
        </div>

        <div className="">
          <ul>
            <li>
              We prescribe a health plan tailored to your specific health needs,
              which includes non-invasive functional holistic approaches. We can
              also prescribe modern medicine as advised by our medical doctors
              if needed.
            </li>
            <li>
              We recommend and offer non-invasive regenerative therapies such as
              Ozone Therapies, and IV Therapies to help the body regenerate and
              heal faster. We also provide our patients with evidence-based
              personalized nutritional guidelines, lifestyle modification, and
              nutritional/herbal supplements as well.
            </li>
            <li>
              We educate our patients with the knowledge they need to heal
              naturally. We believe that the right to heal belongs to everyone
              who sincerely desires and manifests it.
            </li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
};
