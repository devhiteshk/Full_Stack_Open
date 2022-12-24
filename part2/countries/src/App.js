import { useState, useEffect } from "react";
import axios from "axios";
let prev = "";

function App() {
  const [countries, setCountriesObj] = useState({});
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountriesObj(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let display;
    if (countries.length > 0) {
      display = countries.filter((e) =>
        e.name.common.toLowerCase().startsWith(name.toLocaleLowerCase())
      );

      if ((display.length <= 10) & (display.length > 1)) {
        let res_arr = [];
        for (let i = 0; i < display.length; i++) {
          res_arr.push({
            id: i,
            name: display[i].name.common,
          });
        }

        // console.log(res_arr);
        setResult(
          <ul className="countryList">
            {res_arr.map((e) => (
              <li className="country" key={e.id}>
                {e.name}{" "}
                <button
                  className="country-btn"
                  value={e.name}
                  onClick={handleClick}
                >
                  Show
                </button>{" "}
              </li>
            ))}
          </ul>
        );
      }

      if (display.length > 10 && display.length < 200) {
        setResult(
          <p className="banner-flag">Too many results be more specific 😊</p>
        );
      }

      if (display.length === 1) {
        let C_name = display[0].name.common;
        let C_capital = display[0].capital[0];
        let C_area = display[0].area;
        let langObj = display[0].languages;
        let lang_arr = [];
        for (var key in langObj) {
          lang_arr.push(langObj[key]);
        }
        let image_url = display[0].flags.png;

        let lat = display[0].capitalInfo.latlng[0];
        let lon = display[0].capitalInfo.latlng[1];

        let getWeather = () => {
          if (prev === "" || prev !== C_name) {
            console.log("request sent");
            axios
              .get(
                "https://api.openweathermap.org/data/2.5/weather?lat=" +
                  lat +
                  "&lon=" +
                  lon +
                  "&appid=" +
                  process.env.REACT_APP_API_KEY +
                  "&units=metric"
              )
              .then((res) => {
                prev = C_name;
                // console.log(
                //   res.data.main.temp,
                //   res.data.wind.speed,
                //   res.data.name
                // );
                let src_img =
                  "http://openweathermap.org/img/wn/" +
                  res.data.weather[0].icon +
                  "@2x.png";
                setWeather(
                  <div className="weather-container">
                    <p className="temp">
                      temperature : <b> {res.data.main.temp}</b> Celcius
                    </p>
                    <img
                      className="weather-img"
                      src={src_img}
                      alt="weather in delhi"
                    />
                    <p className="wind">
                      wind : <b>{res.data.wind.speed}</b> m/s
                    </p>
                  </div>
                );
              })
              .catch((err) => console.log(err));
          }
        };
        setResult(
          <div className="country-container">
            <h1 className="country-Name">{C_name}</h1>
            <p className="country-capital">Capital : {C_capital}</p>
            <p className="country-area">Area : {C_area} km²</p>
            <h4 className="languag-heading">LANGUAGES:</h4>
            <ul className="language-list">
              {lang_arr.map((l) => (
                <li className="lang-name" key={l}>
                  {l}
                </li>
              ))}
            </ul>
            <h4 className="flag-heading">COUNTRY FLAG</h4>
            <img
              className="flag-image"
              src={image_url}
              alt="flag of this country"
            />
            <h4 className="weather-cap-heading">Weather in Capital</h4>
            {getWeather()}
            {weather}
          </div>
        );
      }
    }
  }, [name, countries, weather]);

  let handleClick = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries</h1>
      </header>
      <div className="search-container">
        <p className="search-bar">Find your Country 😊 </p>
        <input
          className="search-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="search"
        />
      </div>

      <div className="result-container">{result}</div>
    </div>
  );
}

export default App;
