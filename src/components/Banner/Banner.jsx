import "./Banner.css";
import { FaCalendarAlt, FaCalendarCheck, FaRegUser } from "react-icons/fa";
import taskImg from "../../assets/New Project (3).png";
import { CiLocationOn } from "react-icons/ci";
import Details from "../Details/Details";

const Banner = () => {
  return (
    <>
      <div className="main-banner">
        <div className="container">
          <div className="banner-section">
            <div className="content">
              <h1>Protect Your Health And Take Care Of Your Health</h1>
              <div className="details">
                <div className="flex-column">
                  <FaCalendarAlt />
                  <div className="text">
                    <h3>Make An Appointment</h3>
                    <p>Schedule With Your Favorite Doctor Anytime</p>
                  </div>
                </div>
                <div className="flex-column">
                  <FaCalendarCheck />
                  <div className="text">
                    <h3>Health Guarantoo Forever</h3>
                    <p>We Always Provide The Best Warranty For You</p>
                  </div>
                </div>
                <div className="flex-column">
                  <FaRegUser />
                  <div className="text">
                    <h3>Find Your Best Doctor</h3>
                    <p>We Always Provide The Best Warranty For You</p>
                  </div>
                </div>
                <div className="flex-column">
                  <CiLocationOn />
                  <div className="text">
                    <h3>Spread In Various Places</h3>
                    <p>Now Clinics Are Available In Various Places</p>
                  </div>
                </div>
              </div>
              <button>Book Now</button>
            </div>
            <div className="img">
              <img src={taskImg} alt="Banner Image" />
            </div>
          </div>
        </div>
      </div>
      <Details />
    </>
  );
};

export default Banner;
