import Synonym from "./Synonym";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h2>{props.meaning.partOfSpeech}</h2>
        <p className="Definition">{props.meaning.definition}</p>
        <p className="Example">
          <Example example={props.meaning.example} />
        </p>
        <Synonym synonyms={props.meaning.synonyms} />
      </div>
    );
  }
}
