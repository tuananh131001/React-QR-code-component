import image from "./images/image-qr-code.png";
import "./App.css";
const cardComponent = {
  img: image,
  title: "Improve your front-end skills by building projects",
  description:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
};

const Card = ({ img, title, description }) => {
  return (
    <div className="card">
      <img src={img} alt="" className="image" />
      <div className="card-text">
        <h1 className="title">{title}</h1>
        <h2 className="description">{description}</h2>
      </div>
    </div>
  );
};

function App() {
  const title = "Cho Quan";
  return (
    <div className="app">
      <section>
        <Card
          img={cardComponent.img}
          title={cardComponent.title}
          description={cardComponent.description}
        />
      </section>
    </div>
  );
}

export default App;
