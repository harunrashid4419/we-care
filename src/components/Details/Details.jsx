import "./Details.css";

const Details = () => {
  return (
    <div className="main-hospital">
      <div className="hospital-details">
        <div className="flex-column">
          <h1>250</h1>
          <p>Best Doctor</p>
        </div>
        <div className="flex-column">
          <h1>15</h1>
          <p>Clinic Location</p>
        </div>
        <div className="flex-column">
          <h1>20</h1>
          <p>Surgery Room</p>
        </div>
        <div className="flex-column">
          <h1>+1500</h1>
          <p>Patient Capacity</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
