import "./About.css";
import aboutImg from "../assets/images/solhydra2.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <h1 className="about-title">About SolHydra</h1>

        <p className="about-text">
          SolHydra is a clean-label, next-generation hydration drink designed for everyday life—not just extreme performance. 
          Built for hot climates and active routines, it restores essential electrolytes like sodium, potassium, and magnesium 
          to help your body retain water, support muscle function, and reduce fatigue. Unlike traditional drinks loaded with 
          sugar and artificial ingredients, SolHydra focuses on what truly matters: balanced hydration, low sugar, and clean, 
          transparent formulation.
        </p>

        <p className="about-text">
          Whether you're working under the sun, commuting, recovering from a workout, or pushing through a midday slump, 
          SolHydra helps your body stay in sync. When you sweat, you lose more than water—you lose vital minerals that 
          plain water can’t replace. SolHydra replenishes those electrolytes to support absorption, maintain energy levels, 
          and keep you performing at your best throughout the day.
        </p>
      </div>

      <div className="about-image-wrap">
        <img src={aboutImg} alt="SolHydra product" className="about-image" />
      </div>
    </section>
  );
};

export default About;
