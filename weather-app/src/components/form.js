import { useState } from "react";
import axios from "axios";

const Form = ({ setInfo, setState }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleChange = async () => {
    if (!city) {
      setError("Lütfen bir şehir giriniz.");
      return;
    }

    const api = "88b1c9a7ab4b0dbdb90cb07dc370a73b";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;

    try {
      const res = await axios(baseURL);
      setInfo(res.data);
      setState(true);
    } catch (error) {
      alert("Geçersiz Lokasyon.!");
    }
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
      {error && <div className="error">{error}</div>}
    </div>
  );
};
export default Form;
