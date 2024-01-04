import React from "react";

export const Vitamin = () => {
  return (
    <>
      <div class="position-relative image-container">
        {/* <img src="https://integmeds.com/wp-content/uploads/2023/03/five-best-vitamins-for-beautiful-skin-products-with-royalty-free-image-950368148-1547504059.jpg" class="w-100" alt="Image" /> */}
        <div class="position-absolute top-50 start-50 translate-middle p-3">
          <h5 class="text-white overlay-text">
            {" "}
            Vitamin Shots (Intramuscular, IM)
          </h5>
        </div>
      </div>
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-2 g-4">
          <div className="col fs-4 text-muted">
            IV vitamin therapy in Houston Texas is a way of delivering
            nourishing vitamins, minerals, antioxidants, amino acids and more,
            right to a person’s blood stream. It’s a faster, more efficient way
            to help your body get the benefits! <br /> <br />
            For example our high-dose vitamin C therapy and other IV vitamin
            treatments can be up to 100x more effective than oral ingestion of
            these same vitamins. This is because it completely bypasses the GI
            tract, which can block absorption of some nutrients. Instead,
            intravenous delivery distributes vitamins and nutrients directly to
            the cells they benefit.
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
export default Vitamin;
