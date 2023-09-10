import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import saurabhImage from "./images/saurabh.jpg";

export default function Home() {
  return (
    <>
      <nav className="sticky-top">
        <Navbar />
      </nav>

      <header>
        <div className="container mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="container">
                  <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="container-fluid py-5">
                      <h4 className="display-6 fw-bold">
                        Hi, I am{" "}
                        <span className="text-violet-600">Saurabh Jaykar</span>
                      </h4>
                      <h1 className="fs-2 my-3 fw-bold">
                        A Passionate Web Developer from{" "}
                        <span className="text-violet-600 fw-bold">India</span>
                      </h1>
                      <div>
                        <h1 className="fs-1 fw-bold text-violet-600 ">
                          MERN Stack Developer.
                        </h1>
                      </div>
                      <div className="row mt-1">
                        <div className="col-md-6">
                          <div className=" d-flex justify-content-evenly mt-3 align-content-center">
                            <Link to="https://github.com/saurabhjaykar1603/">
                              <Button
                                btnName={"Github"}
                                classN={"fw-bold bg-violet-600 text-lg"}
                              />
                            </Link>
                            <Link to="https://github.com/saurabhjaykar1603/">
                              <Button
                                btnName={"Linkedin"}
                                classN={"fw-bold bg-violet-600 text-lg mx-3"}
                              />
                            </Link>
                            <Link to="https://github.com/saurabhjaykar1603/">
                              <Button
                                btnName={"Resume"}
                                classN={
                                  "fw-bold btn btn-outline bg-violet-600 text-lg "
                                }
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="container">
                  <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="container-fluid ">
                      <img
                        src={saurabhImage}
                        alt=""
                        className="h-80 d-block mx-auto rounded-lg shadow-violet-700 shadow-xl "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
