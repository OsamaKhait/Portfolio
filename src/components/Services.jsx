import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Informatique",
      desc: "Langages de programmation : PHP / Python / C#\nLangages web : HTML5 / CSS3\nFramerwork : Angular, Symfony",
      icon: "fas fa-laptop-code",
    },
    {
      name: "Compétences réseaux",
      desc: "Simulation et gestion d'un réseau local (Topologie, NAT, Routage dynamique) \nSécurisation d'un réseau local ( VLAN, ACL, Protocoles dynamiques )",
      icon: "fas fa-network-wired",
    },
    {
      name: "Analyse des données",
      desc: "Mise en place d'une base de données : MySQL, La gestion du stockage",
      icon: "fas fa-database",
    },
    {
      name: "Communication",
      desc: "Aptitude à travailler en équipe, \nPrise d'initiatives, \nSens de l'écoute",
      icon: "fas fa-book",
    },
    {
      name: "Administration système",
      desc: "Linux : Ubuntu / Debian, \nWindows server",
      icon: "fab fa-linux",
    },
    {
      name: "Soft-Skills",
      desc: "Adaptabilité, \nEsprit d'initiative",
      icon: "fas fa-face-smile",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Skills
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Compétences
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
