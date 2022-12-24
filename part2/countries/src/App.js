import { useState, useEffect } from "react";
import axios from "axios";

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

        console.log(res_arr);
        setResult(
          <ul>
            {res_arr.map((e) => (
              <li key={e.id}>
                {e.name}{" "}
                <button value={e.name} onClick={handleClick}>
                  Show
                </button>{" "}
              </li>
            ))}
          </ul>
        );
      }

      if (display.length > 10 && display.length < 200) {
        setResult(<p>Too many results be more specific 😊</p>);
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
              console.log(
                res.data.main.temp,
                res.data.wind.speed,
                res.data.name
              );
              let src_img =
                "http://openweathermap.org/img/wn/" +
                res.data.weather[0].icon +
                "@2x.png";
              setWeather(
                <div>
                  <p>
                    temperature : <b> {res.data.main.temp}</b> Celcius
                  </p>
                  <img src={src_img} alt="weather in delhi" />
                  <p>
                    wind : <b>{res.data.wind.speed}</b> m/s
                  </p>
                </div>
              );
            })
            .catch((err) => console.log(err));
        };

        setResult(
          <div>
            <h1>{C_name}</h1>
            <p>capital :{C_capital}</p>
            <p>area : {C_area}</p>
            <h4>LANGUAGES:</h4>
            <ul>
              {lang_arr.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <h4>FLAG</h4>
            <img src={image_url} alt="flag of this country" />
            <h4>Weather in Capital</h4>
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

      <p>
        find countries{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="search"
        />
      </p>

      <div>{result}</div>
    </div>
  );
}

export default App;
