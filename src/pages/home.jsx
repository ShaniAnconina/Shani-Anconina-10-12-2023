export function HomePage() {


  return (
    <div className="home-page">
      <input className="search-location" type="search" placeholder="Type a location" />
      <div className="location-weather">
        <div className="top-section">
          <div className="curr-weather">
            <img className="weather-icon" src={require("../assets/img/rain-cloud.png")} />
            <div>
              <p className="location-name">Tel Aviv</p>
              <p className="location-degrees">38°</p>
            </div>
          </div>
          <div className="add-to-favorites">favorites</div>
        </div>
        <h1 className="weather-title">Sunny</h1>
        <div className="weekly-weather">
          <div className="daily-weather">
            <img className="weather-icon" src={require("../assets/img/rain-cloud.png")} />
            <p>Sun</p>
            <span className="daily-degrees">38°</span>
          </div>
          <div className="daily-weather">
            <img className="weather-icon" src={require("../assets/img/rain-cloud.png")} />
            <p>Mon</p>
            <span className="daily-degrees">38°</span>
          </div>
          <div className="daily-weather">
            <img className="weather-icon" src={require("../assets/img/rain-cloud.png")} />
            <p>Tue</p>
            <span className="daily-degrees">38°</span>
          </div>
          <div className="daily-weather">
            <img className="weather-icon" src={require("../assets/img/rain-cloud.png")} />
            <p>Wed</p>
            <span className="daily-degrees">38°</span>
          </div>
          <div className="daily-weather">
            <img className="weather-icon" src={require("../assets/img/rain-cloud.png")} />
            <p>Thu</p>
            <span className="daily-degrees">38°</span>
          </div>
        </div>
      </div>
    </div>
  );
}