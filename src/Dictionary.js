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

  function search(event) {
    event.preventDefault();
  }

  function handleResponse(response) {
    setResults(response.data);
  }
  //documentation- https://www.shecodes.io/learn/apis/dictionary
  const apiKey = "5ca9a4e04df3dddde0tdc3bec6cd3f5o";
  const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}></input>
      </form>
      <Results results={results} />
    </div>
  );
}
