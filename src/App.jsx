import React from 'react'
import { Cloud, Sun, Wind, Droplets, CloudRain } from 'lucide-react'
import './WeatherApp.css'

const WeatherApp = () => {
  return (
    <div className="weather-app">
      <div className="weather-container">
        <div className="top-section">
          <div className="temp-display">
            <div className="main-temp">73°</div>
            <div className="high-low">H:78° L:67°</div>
            <div className="feels-like">Feels like 75°</div>
          </div>
          <div className="main-icon">
            <CloudRain size={84} />
          </div>
        </div>
        
        <h1 className="location">Philadelphia, PA</h1>
        <div className="until-time">
          Until 8PM <CloudRain size={24} style={{marginLeft: '5px'}} />
        </div>
        <div className="weather-details">
          <div>
            <Wind size={18} /> 7mph
          </div>
          <div>
            <Droplets size={18} /> 40%
          </div>
        </div>
        
        <div className="hourly-forecast">
          <p>Hourly Forecast</p>
          <div className="forecast-items">
            {['3PM', '4PM', 'NOW', '6PM', '7PM'].map((time, index) => (
              <div key={index} className="forecast-item">
                <p>{time}</p>
                <Cloud size={24} />
                <p>{[71, 72, 73, 72, 70][index]}°</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="additional-info">
          <div className="uv-air-quality">
            <div className="uv-info">
              <Sun size={18} /> UV 0
            </div>
            <div className="air-quality">
              Air Quality: Good
            </div>
          </div>
          
          <div className="weekly-forecast">
            <div className="forecast-day">
              <span>Wednesday: Partly Cloudy, H:64° L:37°</span>
              <Cloud size={18} />
            </div>
            <div className="forecast-day">
              <span>Thursday: Sunny, H:81° L:67°</span>
              <Sun size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
