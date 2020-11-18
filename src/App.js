import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    date: "",
    shortDescription: "Loading...",
    fullDescriptionHtml: "",
  });

  useEffect(async () => {
    try {
      const result = await axios(
        "https://react-challenge-api.herokuapp.com/first-challenge/episodes/3"
      );

      setData(result.data);
      console.log(result.data);
    } catch (e) {
      setData({
        date: "",
        shortDescription: "Error!",
        fullDescriptionHtml: "Check console for details.",
      });
      console.log(e);
    }
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Response:</h1>
        <h2>{data.shortDescription}</h2>
        <h3>{data.date}</h3>
        <p>{data.fullDescriptionHtml}</p>
      </header>
    </div>
  );
}

export default App;
