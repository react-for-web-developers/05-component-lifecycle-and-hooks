import Card from "./Card";
export default function Columns({ digimons = [] }) {
  return (
    <div className="columns is-multiline ">
      {digimons.map((digimon) => (
        <div
          key={digimon.name}
          className="column is-one-quarter is-one-mobile is-half-tablet is-quarter-desktop"
        >
          <Card {...digimon} />
        </div>
      ))}
    </div>
  );
}
