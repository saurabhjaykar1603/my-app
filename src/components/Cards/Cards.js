import "./Cards.css"
export default function Cards({title, description, img }) {
    
  return (
    <>
      <div class="card custom-card">
        <img src={img} class="card-img-top d-block mx-auto card-card-img" alt="..." />
        <div class="card-body">
          <h1 class="card-title fs-2 text-center">{title}</h1>
          <p class="card-text">
           {description}
          </p>
          <div className="container d-flex justify-content-evenly mt-3 ">
          <a href="/" class="btn btn-dark">
            Github Code
          </a>
          <a href="/" class="btn btn-dark">
            Live Demo
          </a>
 

          </div>
        </div>
      </div>
    </>
  );
}
