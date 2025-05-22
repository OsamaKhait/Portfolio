import React from "react";
import resumeFile from "../documents/resume.pdf";
import CompetencesFile from "../documents/CompetencesFile.pdf"
import VeilleTechFile from "../documents/VeilleTechFile.pdf"

const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Présentation
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              Je m'appelle<span className="text-primary"> Osama Khait,</span>
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            Actuellement en deuxième année de BTS Services Informatiques aux Organisations à Annecy au sein du Lyceé Gabriel Fauré, 
            je suis animé d'une motivation et je m'efforce constamment de faire preuve de 
            proactivité et de fiabilité dans l'accomplissement de mes missions.


            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            C'est dans cette optique que je cherche une alternance d'un an à partir de septembre 2025, 
            cherchant à combiner mes études théoriques avec une expérience 
            professionnelle enrichissante.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Nom:</span>Osama Khait
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:osama@khait.fr">osama@khait.fr</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>22
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">Adresse:</span>Annecy, France
                </li> 
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Télécharger CV
              </a>
              <a
                href={CompetencesFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Tableau de Compétences
              </a>
              <a
                href={VeilleTechFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Veille Technologique
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        {/* <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>10</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>250</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>650</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projects Done
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>38</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Get Awards
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
