import React from "react";
import Service from "./Service";
import per1 from "../../../assets/img/per3.jpg";
import per2 from "../../../assets/img/per2.jpeg";

export const PersonalizedPlan = () => {
  return (
    <div className="aw-vitamine">
      <div class="aw-personalized">
        <div class="aw-position-absolute top-50 start-50 translate-middle p-3">
          <h5 class="text-white aw-overlay-text fs-1" data-aos="fade-right">
            {" "}
            Personalized Treatment Plan
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
              A personalized treatment plan is like a customized roadmap to
              recovery. Just like a traditional treatment plan, a personalized
              treatment plan gives guidance and direction. However, unlike a
              one-size-fits-all treatment plan, a personalized treatment plan is
              tailored to meet your specific needs and circumstances. <br />{" "}
              <br /> Whether you’re struggling with a mental health disorder,
              addiction, chronic illness, or other health concerns, a
              personalized treatment plan is designed to address your unique
              challenges and goals. This approach recognizes that every person
              is different and requires an individualized approach to treatment.{" "}
              <br /> <br />
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
            A personalized treatment plan is developed by a team of healthcare
            professionals who specialize in your specific condition. These
            professionals work together to assess your current health status,
            identify your goals, and develop a comprehensive treatment plan that
            takes into account your personal preferences, lifestyle, and medical
            history.This plan also provides a clear roadmap to recovery,
            outlining specific goals and milestones that you can work towards.
            This can help you stay motivated and focused, even during the most
            challenging moments of your recovery journey. <br /> <br /> The
            benefits of a personalized treatment plan are numerous. It ensures
            that you receive the most effective treatment possible, tailored to
            your unique needs and circumstances. It also empowers you to take an
            active role in your recovery, as you are involved in every step of
            the process. <br /> <br />
            In summary, a personalized treatment plan is an essential tool for
            achieving optimal health outcomes. It provides a customized roadmap
            to recovery, tailored to meet your specific needs and circumstances.
            With a personalized treatment plan, you can take an active role in
            your recovery, stay motivated and focused, and achieve your goals
            for a healthier, happier life.
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="text-center d-flex align-items-center justify-content-center">
                <img src={per2} alt="vitamin-07" className="img-fluid " />
              </div>
            </div>
            <div className="col-md-6 my-4  fs-5 text-muted">
              Personalized nutrition is based on the idea that everyone’s body
              and lifestyle are unique and therefore require a tailored approach
              to nutrition. Rather than following a generic diet plan,
              personalized nutrition takes a variety of factors into account,
              such as age, gender, body composition, metabolism, genetics, and
              lifestyle habits. By analyzing this information, a personalized
              diet plan can be created that is customized to meet the specific
              needs of each individual. In this article, we’ll explain
              personalized nutrition more in-depth, provide some examples, and
              discuss the potential health advantages of this style of eating.
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
export default PersonalizedPlan;
