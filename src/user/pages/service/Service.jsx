import React from 'react'
import { Link } from "react-router-dom";

export const Service = () => {
  return (
    <>
        <Link className="nav-link mb-2 side-link" to="/vitamin-shots">
              Vitamin Shots
            </Link>
            <Link className="nav-link mb-2 side-link" to="/ozone-therapies">
            Ozone Therapies
            </Link>
            <Link className="nav-link mb-2 side-link" to="/houston-chiropractor">
              Houston Chiropractor
            </Link>

            <Link className="nav-link mb-2 side-link" to="/modern-acupuncture">
              {" "}
              Modern Acupuncture​
            </Link>

            <Link className="nav-link mb-2 side-link" to="/kinesiology">
              {" Advance Kinesiology/Nutrition Response Testing"}
            </Link>

            <Link className="nav-link mb-2 side-link" to="/naturopathy">
              {" "}
              Nutrition and naturopathy lifestyle coach
            </Link>

            <Link className="nav-link mb-2 side-link" to="/comprehensive">
              {"Full body comprehensive exam"}
            </Link>

            <Link className="nav-link mb-2 side-link" to="/diet-plan">
              {" "}
              Personalized diet plan
            </Link>
            <Link className="nav-link mb-2 side-link" to="/personalized">
              {" "}
              Personalized treatment plan
            </Link>

            <Link className="nav-link mb-2 side-link" to="/root-cause">
              {" "}
              Healing root cause of disease
            </Link>

            <Link className="nav-link mb-2 side-link" to="/natural-supp">
              {" "}
              Natural supplementation
            </Link>
    </>
  )
}
export default Service;