import "./usage.css";
import sportImg from "../assets/images/visual.png";

const UsageSection = () => {
  return (
    <section className="usage-section">
      
      <h2 className="usage-title">Fuel Every Moment</h2>
      <p className="usage-subtitle">
        From intense workouts to focused workdays, SolHydra keeps you going.
      </p>

      <div className="usage-grid">
        
        <div className="usage-card">
          <img src={sportImg} alt="SolHydra during sports" />
        </div>

      </div>

    </section>
  );
};

export default UsageSection;
