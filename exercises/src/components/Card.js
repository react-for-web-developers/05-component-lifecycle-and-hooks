export default function Card({
  img = "https://digimon.shadowsmith.com/img/koromon.jpg",
  name = "Default",
  level = "Default"
}) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-96x96">
              <img src={img} alt={"Digimon " + name} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{level}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
