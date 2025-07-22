import weatherImage from "../../assets/day-sunny.png";

import "./WeatherCard.css";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75 &deg; F </p>
      <img src={weatherImage} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
