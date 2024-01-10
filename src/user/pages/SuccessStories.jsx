import React from "react";

export const SuccessStories = () => {
  return (
    <div>
      <div className="success-header">
        <div className="vertical-center">
          <div className="text-center pt-5">Our Success Stories</div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center">
          We prescribe a health plan tailored to your specific health needs,
          which includes non-invasive functional holistic approaches.
        </h2>
        <div className="my-5 text-center">
          Comprehensive lab work and specialty testing, like food sensitivity,
          microbiome, toxic metal, and hormone testing are also used to uncover
          the root cause of your persistent symptoms.
        </div>
        <div className="row my-5 row-cols-1 row-cols-md-3 g-2">
          <div className="col">
            <iframe
              className="object-fit-fill w-100"
              src="https://www.youtube.com/embed/oF8gRge6ylg?si=F9fNx6ZLzUaSbafk&amp;start=2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col">
            <iframe
              className="object-fit-fill w-100"
              src="https://www.youtube.com/embed/sFn0tnHHECQ?si=lbfBhd32tNOWAddv&amp;start=2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col">
            <iframe
              className="object-fit-fill w-100"
              src="https://www.youtube.com/embed/l69eiCjaPag?si=pIDq4JbOK8eIOfQl&amp;start=2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col">
            <iframe
            className="w-100"
              src="https://www.youtube.com/embed/FSl17zx6oz0?si=tO8TMHOZNOgGDI0g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col">
            <iframe
            className="w-100"
              src="https://www.youtube.com/embed/r4rzLw-x3Mk?si=MjqVGFlD23GJHvqE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessStories;
