import React from "react";
import Service from "./Service";
import per1 from "../../../assets/img/root1.jpeg";
import per2 from "../../../assets/img/root2.jpg";

export const RootCause = () => {
  return (
    <div className="aw-vitamine">
      <div class="aw-personalized">
        <div class="aw-position-absolute top-50 start-50 translate-middle p-3">
          <h5 class="text-white aw-overlay-text fs-1" data-aos="fade-right">
            {" "}
            Healing Root Cause of Disease
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
              Treating the root cause is an essential aspect of holistic health,
              and it can be applied to many conditions. For example, if someone
              has chronic headaches, treating the symptom would be to take pain
              medication or use other forms of pain relief. However, treating
              the root cause would involve determining the underlying reason for
              the headaches, such as poor posture, stress, or food allergies.
              Once the cause is identified, steps can be taken to address it,
              such as improving posture, reducing stress, or avoiding trigger
              foods. By treating the root cause, the headaches may be eliminated
              or significantly reduced.
            </div>
            <div className="col-md-4">
              <div className="text-center d-flex align-items-center justify-content-center">
                <img src={per1} alt="vitamin-07" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="fs-5 text-muted">
            Lastly, let’s consider anxiety, which is a common mental health
            condition. Treating the symptom would be to take anti-anxiety
            medication to alleviate the symptoms. However, treating the root
            cause would involve identifying what is causing the anxiety, such as
            stress, trauma, or chemical imbalances. By addressing the root
            cause, steps can be taken to reduce or eliminate anxiety, such as
            stress management techniques, therapy, or nutritional supplements.
          </div>
          <div className="row g-4 my-2">
            <div className="col-md-6">
              <div className="text-center d-flex align-items-center justify-content-center">
                <img src={per2} alt="vitamin-07" className="img-fluid " />
              </div>
            </div>
            <div className="col-md-6 my-4  fs-5 text-muted">
              In conclusion, treating the root cause is a crucial aspect of
              holistic health, and it involves identifying and addressing the
              underlying cause of a condition rather than just treating the
              symptoms. By addressing the root cause, the condition can be
              treated more effectively, and the individual can experience
              improved overall health and wellness. As a naturopath, I approach
              health care by treating both root causes and symptoms using gentle
              and natural remedies. <br /> <br />
              For an Example – “Acid Reflux” which is a common digestive
              disorder. Treating the symptom would be to take antacids or other
              acid-reducing medications to alleviate the discomfort. However,
              treating the root cause would involve identifying what is causing
              the acid reflux, such as eating too quickly, consuming certain
              foods, or having a hiatal hernia. By addressing the root cause,
              steps can be taken to reduce or eliminate acid reflux, such as
              eating more slowly, avoiding trigger foods, or receiving treatment
              for the hernia.
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
export default RootCause;
