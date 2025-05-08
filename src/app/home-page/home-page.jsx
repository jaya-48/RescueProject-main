import React from 'react';
import './home-page.css'; // You can move the style part into this CSS file

const HomePage = () => {
  const closeFlashNews = () => {
    const element = document.getElementById('flash-news');
    if (element) element.style.display = 'none';
  };

  return (
    <div id="webcrumbs">
      {/* Header */}
      <header>
        <div className="home-flex">
          <img
            src="https://tools-api.webcrumbs.org/image-placeholder/100/100/doodles/1"
            alt="Platform Logo"
          />
          <h1>Disaster Response Hub</h1>
        </div>
      </header>

      {/* Flash News */}
      <div className="home-flash-news" id="flash-news">
  <span>Flash News</span>
  <div className="scrolling-text">
    Severe weather warning in effect for coastal regions. Please take necessary precautions and stay updated for further instructions.
  </div>
  <button onClick={closeFlashNews}>Close</button>
</div>


      {/* Page Content */}
      <div className="home-content">
        <h1>Emergency Care Dashboard</h1>

        {/* First Aid Section */}
        <section>
          <img
            src="https://th.bing.com/th?id=OIP.ohDbP_PIyH8RoLBYvQKzPgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="First Aid"
          />
          <div>
            <h3>First Aid Treatment List</h3>
            <div className="home-card">
              <p>
                1. Apply pressure to wounds. <br />
                2. Immobilize fractured areas. <br />
                3. Perform CPR for unresponsive victims. <br />
                4. Treat shock by keeping victims warm and calm. <br />
                5. Administer basic wound cleaning.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section>
          <img
            src="https://th.bing.com/th?id=OIP.TQNpoC-3A1M6-U2lQHYZkAHaGP&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="Emergency Contact"
          />
          <div>
            <h3>Emergency Contact List</h3>
            <div className="home-card">
              <ul>
                <li>Ambulance: 911</li>
                <li>Police: 100</li>
                <li>Fire Services: 101</li>
                <li>Local Hospitals: 012-3456789</li>
                <li>Forces Response: 110</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Victim Status Section */}
        <section>
          <img
            src="https://th.bing.com/th?id=OIP.TNmw_ady_BRshaDT1dEJAgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="Victim Status"
          />
          <div>
            <h3>Victim Status Overview</h3>
            <div className="home-card">
              <p>
                Monitor the status of victims awaiting hospital admission and assess plans for stabilization.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HomePage;   
