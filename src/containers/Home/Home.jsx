import Sphere from "../../assets/images/spinning-sphere.gif";
import "./home.css";

function Home() {
  return (
    <div className="main-container">
      <div className="container h-100 d-flex align-items-center">
        <div className="row mx-auto">
          <div className="col-sm-12">
            <h1 className='landing-header'>
              Hi, I'm Rashawn
              <br />
              I'm a Full Stack Developer.
            </h1>
            <div className="d-flex justify-content-center mt-5">
                <img className="sphere" src={Sphere} alt="Rotating Sphere"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
