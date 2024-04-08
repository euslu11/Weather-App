import { WiSunset } from "react-icons/wi";

function Info({ info, state }) {
  return (
    <div>
      {state ? (
        <div className="info">
          <p id="sehir">
            {info.name},{info.sys.country}
          </p>
          <div className="derece">
            <p id="sicaklik">{info.main.temp}</p>
            <WiSunset className="fa-c" />
          </div>
          <p id="havaDurumu">{info.weather[0].description}</p>
          <div className="his">Hissedilen:{info.main.feels_like}</div>
          <WiSunset className="fa-c" />
        </div>
      ) : null}
    </div>
  );
}

export { Info };
