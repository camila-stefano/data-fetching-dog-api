import Api from "./Api";
import image from "../assets/images/dogs.jpg";
import "../styles.css";

function Home() {
  return (
    <div className="home__wrapper">
      <section className="home__container">
        <div className="home__image">
          <img src={image} alt="Imagen de perritos" />
        </div>
        <div className="home__image__randoms">
          <Api />
        </div>
      </section>
    </div>
  );
}

export default Home;
