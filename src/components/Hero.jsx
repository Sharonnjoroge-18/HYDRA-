import heroImage from "../assets/images/solhydra1.png";
import "./Hero.css";


const Hero = () => {
  return (
    <section className="hero-container">
      <img
        src={heroImage}
        alt="SolHydra Sparkling Water"
        className="hero-bg-image"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          Hydrate Better. <br />
           <span>Stay Sharp Daily</span>
        </h1>

     
      </div>
      <div className="moving-text">
        <span className="moving-text-content">
          ◆ Clean electrolyte hydration designed for life in heat ◆
        </span>
      </div>
    </section>
  );
};

export default Hero;
