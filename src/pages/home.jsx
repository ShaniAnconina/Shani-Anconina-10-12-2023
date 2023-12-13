export function HomePage() {


  return (
    <div className="home-page">
      <input type="search" placeholder="Type a city name" />
      <div className="location-weather">
        <div className="top-section">
          <div className="left">
            <img src={require("../assets/img/rain-cloud.png")} className="weather-img" />
            <div>
              <p className="location-name">Tel Aviv</p>
              <p className="location-degrees">38°</p>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="weather-title">Sunny</div>
        <div className="top-section"></div>
      </div>
    </div>
  );
}