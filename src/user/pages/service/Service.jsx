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

            <Link className="nav-link mb-2 side-link" to="/userDetails">
              {" "}
              Modern Acupuncture​
            </Link>

            <Link className="nav-link mb-2 side-link" to="/userDetails">
              {" Advance Kinesiology/Nutrition Response Testing"}
            </Link>

            <Link className="nav-link mb-2 side-link" to="/userDetails">
              {" "}
              Nutrition and naturopathy lifestyle coach
            </Link>

            <Link className="nav-link mb-2 side-link" to="/userDetails">
              {"Full body comprehensive exam"}
            </Link>

            <Link className="nav-link mb-2 side-link" to="/userDetails">
              {" "}
              Personalized diet plan
            </Link>

            <Link className="nav-link mb-2 side-link" to="/userDetails">
              {" "}
              Personalized treatment plan
            </Link>

            <Link className="nav-link mb-2 side-link" to="/userDetails">
              {" "}
              Healing root cause of disease
            </Link>

            <Link className="nav-link mb-2 side-link" to="/userDetails">
              {" "}
              Natural supplementation
            </Link>
    </>
  )
}
export default Service;