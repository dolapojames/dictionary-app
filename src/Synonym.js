export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div>
        <div className="Synonyms"> Synonyms:</div>
        <ul className="Synonym">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
