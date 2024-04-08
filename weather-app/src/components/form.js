import { useState } from "react";
import axios from "axios";

export default function Form({ setInfo, setState }) {
  const [city, setCity] = useState("");

  const handleChange = async () => {
    const api = "88b1c9a7ab4b0dbdb90cb07dc370a73b";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
    await axios(baseURL).then((res) => setInfo(res.data));
    setState(true);
  };

  return (
    <div>
      <h1>Hava Durumu</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
        }}
      >
        <div className="form">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="inputText"
            type="text"
            placeholder="Lütfen Şehir Giriniz"
          />
          <div className="btnDiv">
            <button type="submit" className="btn">
              Hava Durumunu Göster
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
