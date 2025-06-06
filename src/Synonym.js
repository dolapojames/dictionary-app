export default function Synonym(props) {
  if (props.synonym) {
    return <ul className="Synonym">- {props.synonym}</ul>;
  } else {
    return null;
  }
}
