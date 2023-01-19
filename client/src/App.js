import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "bai error aaa"));
  }, []);

  return (
    <div className="App">
      <h1>this my app working fine</h1>
      {data.map((singledata) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(singledata.img.data.data))
        );
       return <img alt="img" src={`data:image/png;base64,${base64String}`}/>
      })}
    </div>
  );
}

export default App;
