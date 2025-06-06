import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    //documentation- https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "5ca9a4e04df3dddde0tdc3bec6cd3f5o";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "pnSThHb7TSTXTFx6B5BS1P1RLGpTPUy2f0wdArc689zOSTOimB1VdxwO";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;

    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    console.log(response);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  return (
    <div className="Dictionary">
      <div>
        <h1>What are you searching for?</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="type a word"
        ></input>
        <div className="Hint"> Enter a word to search...</div>
      </form>

      <Results results={results} />
    </div>
  );
}
