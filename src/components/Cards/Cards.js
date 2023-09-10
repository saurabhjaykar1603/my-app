import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Cards.css";
export default function Cards({ title, description, img, gitubUrl, liveUrl }) {
  return (
    <>
      <div className="card custom-card">
        <img
          src={img}
          className="card-img-top d-block mx-auto card-card-img"
          alt="..."
        />
        <div className="card-body">
          <h1 className="card-title fs-2 text-center">{title}</h1>
          <p className="card-text">{description}</p>
          <div className="container d-flex justify-content-evenly mt-3 ">
            <Link to={liveUrl} className="btn btn-dark">
              <Button btnName={"Live Demo"} />
            </Link>
            <Link to={gitubUrl} className="btn btn-dark">
              <Button btnName={"Github"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
