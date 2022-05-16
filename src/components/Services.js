import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeadset,
  faUserTie,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="container py-3">
      <div className="mb-5 text-center">
        <h2
          className="section-title ff-secondary text-start test
                                fw-normal"
        >
          Our Services
        </h2>
      </div>
      <div className="row g-4">
        {/* card 1 */}
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item rounded pt-3 shadow">
            <div className="p-4">
              <FontAwesomeIcon icon={faUserTie} className="fa-3x test mb-3" />
              <h5>Chief Chef</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                earum. Modi deserunt nihil voluptatum, itaque quod voluptate?
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item rounded pt-3 shadow">
            <div className="p-4">
              <FontAwesomeIcon icon={faUtensils} className="fa-3x test mb-3" />
              <h5>Healthy Food</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur ullam, laudantium quaerat voluptatibus architecto
              </p>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
          <div className="service-item rounded pt-3 shadow">
            <div className="p-4">
              <FontAwesomeIcon icon={faCartPlus} className="fa-3x test mb-3" />
              <h5>Online Order</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                dolore perferendis placeat odio maxime perspiciatis natus
                dolorem earum!
              </p>
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className="col-lg-3 col-sm-6 wow fadeInUp">
          <div className="service-item rounded-pt-3 shadow">
            <div className="p-4">
              <FontAwesomeIcon
                icon={faHeadset}
                className="fa-3x test mb-3 svgIcon"
              />
              <h5 className="pt-3">Customer Care</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur laborum est quo possimus magnam laudantium repudiandae
                qui facere, nobis pariatur?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
