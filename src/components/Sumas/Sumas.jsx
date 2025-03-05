import { useState } from "react";
import { postSuma, getSumas } from "../../services/suma.services";
export default function Sumas() {
  const [data, setFormData] = useState({
    a: 0,
    b: 0,
  });

  const [sumasFromDb, setSumaFromDb] = useState([]);

  const handleOnChange = (e) => {
    setFormData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    if(!data.a || !data.b)
      return;
    postSuma(data)
    getSumas(setSumaFromDb)
  }
  return (
    <>
      <div>
      <label htmlFor="numA">Numero 1</label>
      <input
        type="number"
        id="numA"
        name="a"
        onChange={handleOnChange}
        placeholder="numero 1"
      />
      <label htmlFor="numb">Numero 2</label>
      <input
        type="number"
        id="numb"
        name="b"
        onChange={handleOnChange}
        placeholder="numero 1"
      />
      <button onClick={handleOnClick}>Sumar</button>
      </div>
        <ul>
        {sumasFromDb.map((numero, index) => <li key={index}>{numero}</li>)}
        </ul>
    </>
  );
}
