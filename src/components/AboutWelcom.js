import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
function AboutWelcom() {
  return (
    <div className="container fullWidth py-5">
      <div className=" flex ai-c ">
        <h3 className="section-title ff-secondary text-start test fw-normal">
          About Us
        </h3>
        <h1 className="mb-4">
          <FontAwesomeIcon
            icon={faUtensils}
            className="fa fa-utensils test me-2"
          />
          Foods and Chills story
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sint at esse placeat accusamus laborum autem! Consectetur placeat
          blanditiis quod itaque ipsam magni quia cumque cum deleniti ipsum
          similique quam, iusto expedita dolore nesciunt sunt quo. Delectus sint
          magnam nemo repudiandae alias placeat harum vero molestias quae fugit.
          Corrupti, impedit.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          iusto numquam rem perferendis, a assumenda facere et neque saepe hic
          modi nulla! Maiores rerum, quisquam architecto quia saepe perferendis
          fuga unde, exercitationem animi maxime recusandae laborum illum porro,
          vitae nam asperiores eligendi.iores rerum, quisquam architecto quia
          saepe perferendis fuga unde, exercitationem animi maxime recusandae
          laborum illum porro, vitae nam asperiores eligen
        </p>
        <div className="row g-4 mb-4">
          <div className="col-sm-6">
            <div className="d-flex align-items-center border-start border-5 border-dark px-3">
              <h1
                className="flex-shrink-0 display-5 test mb-0"
                data-toggle="counter-up"
              >
                5
              </h1>
              <div className="ps-4">
                <p className="mb-0">Years of</p>
                <h6 className="text-uppercase mb-0">Experience</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex align-items-center border-start border-5 border-dark px-3">
              <h1
                className="flex-shrink-0 display-5 test mb-0"
                data-toggle="counter-up"
              >
                50
              </h1>
              <div className="ps-4">
                <p className="mb-0">Popular</p>
                <h6 className="text-uppercase mb-0">Master Chefs</h6>
              </div>
            </div>
          </div>
        </div>
        <a className="btn test2 py-3 px-5 mt-2" href="/">
          Read More
        </a>
      </div>
    </div>
  );
}

export default AboutWelcom;
