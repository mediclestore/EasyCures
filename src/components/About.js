import React from 'react';
import './About.css'; // Assuming your styles are in a file called AboutUs.css

function AboutUs() {
  return (
    <div className="about-us-container">
      <header>
        <h1>About Us</h1>
      </header>
      <main>
        <section className="about-us-intro">
          <p>
            {/* Briefly describe your company, its mission, and its values. */}
            We are a company passionate about Health Care Instruments and Medicine. Our mission is to Capture the Indian health care widely. We believe in innovation, collaboration, excellence.
          </p>
        </section>
        <section className="about-us-team">
          <h2>Our Team</h2>
          
          <ul>
            <li>
              <h3>John week</h3>
              <p>CEO and Founder</p>
              <p>John is a seasoned entrepreneur with EasyCure.</p>
            </li>
            <li>
              <h3>Juber T</h3>
              <p>HOD: Design and Research</p>
              <p>Juber is a Manger and head of Design with EasyCure.</p>
            </li>
            
          </ul>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
