import "./About.css";
import aboutImg from "../assets/images/twobottles.jpeg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h1 className="about-title">About SolHydra</h1>

        <div className="about-intro">
          <div className="about-copy">
            <p className="about-kicker">Clean daily hydration</p>
            <p className="about-text">
              SolHydra goes beyond ordinary water. Made with clean electrolytes
              and low sugar, it helps your body stay hydrated, refreshed, and
              focused throughout the day. Designed for hot climates and busy
              lifestyles, it delivers clean daily hydration without artificial
              additives or sugar overload.
            </p>
          </div>

          <div className="about-image-wrap">
            <img src={aboutImg} alt="Two SolHydra bottles" className="about-image" />
          </div>
        </div>

        <div className="about-details">
          <h2 className="about-subtitle">Ingredients</h2>

          <div className="about-details-grid">
            <div className="nutrition-table-wrap">
              <table className="nutrition-table">
                <thead>
                  <tr>
                    <th>Nutrient</th>
                    <th>Amount per 500ml</th>
                    <th>% Daily Value*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Energy</td>
                    <td>50 kcal</td>
                    <td>2.5%</td>
                  </tr>
                  <tr>
                    <td>Total Carbohydrates</td>
                    <td>12.5g</td>
                    <td>4%</td>
                  </tr>
                  <tr>
                    <td>Sugars</td>
                    <td>10g</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Added Sugars</td>
                    <td>10g</td>
                    <td>20%</td>
                  </tr>
                  <tr>
                    <td>Protein</td>
                    <td>0g</td>
                    <td>0%</td>
                  </tr>
                  <tr>
                    <td>Fat</td>
                    <td>0g</td>
                    <td>0%</td>
                  </tr>
                  <tr>
                    <td>Sodium (Na+)</td>
                    <td>575 mg (25 mEq/L)</td>
                    <td>25%</td>
                  </tr>
                  <tr>
                    <td>Potassium (K+)</td>
                    <td>156 mg (8 mEq/L)</td>
                    <td>3%</td>
                  </tr>
                  <tr>
                    <td>Calcium (Ca2+)</td>
                    <td>40 mg (2 mEq/L)</td>
                    <td>3%</td>
                  </tr>
                  <tr>
                    <td>Magnesium (Mg2+)</td>
                    <td>30 mg (2.5 mEq/L)</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>Chloride (Cl-)</td>
                    <td>300 mg</td>
                    <td>13%</td>
                  </tr>
                  <tr>
                    <td>Vitamin C</td>
                    <td>25 mg</td>
                    <td>28%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="ingredients-copy">
              <p className="about-kicker">What is inside</p>
              <p className="about-text">
                Water, glucose (for fast absorption), sea salt, potassium chloride,
                magnesium chloride, calcium lactate, citric acid, stevia leaf
                extract, natural citrus flavor, vitamin C (antioxidant).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
