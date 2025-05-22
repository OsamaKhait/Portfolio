import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "traitement_donnees",
    BRAND: "reseaux",
    PHOTOS: "electronique",
  };
  
  const filterLabels = {
    "*": "Tous",
    traitement_donnees: "Traitement des données",
    reseaux: "Réseaux",
    electronique: "Électronique",
  };

  const projectsData = [
    {
      title: "Photo-ATB",
      projectInfo:
        "Création d'une application web capable de prendre des photos d'un banc avionique dans le but de garder une trace des changements effectués à l'issue de l'intervention d'un technicien. Le travail effectué comporte : - Réalisation d'un cahier des charges définissant les besoins et les spécifications du client, - Création d'un site web permettant la consultation des photos selon les droits attribués, - Création d'une base de données - Mise en place d'une gestion de stockage locale ",
      technologies: "Raspberry, HTML5, CSS3, , Python, PHP",
      industry: "Développement informatique",
      date: "Juillet 2022",
      url: {
        name: "Github",
        link: "https://github.com/OsamaKhait/thales/tree/main/thales",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/osamakhait/",
        github: "https://github.com/OsamaKhait",
        mail: "mailto:osama@khait.fr",
      },
      thumbImage: "images/projects/project-1.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Construire un réseau informatique",
      projectInfo:
        "L'objectif de ce projet c'est de Comprendre et construire une architecture de réseaux d’entreprise et d’Internet, Elaborer une méthode efficace pour tester progressivement la configuration réalisée, Construire un réseau local virtuel VLAN, Intercepter un trafic entre 2 ordinateurs et identifier le chemin utilisé, et de Construire une passerelle entre un réseau émulé et un réseau réel.",
      client: "Mahad WAIS",
      technologies: "Routage dynamique, NAT, OSPF, VLAN, ACL",
      industry: "Réseau et télécomunication",
      date: "Mai, 2023",
      url: {
        name: "Rapport (Google docs)",
        link: "https://docs.google.com/document/d/1ZvCayv-F0kqDzLrJ06BWDxTrnOiVh13xEMGs92leTMs/edit?usp=sharing",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/osamakhait/",
        github: "https://github.com/OsamaKhait",
        mail: "mailto:osama@khait.fr",
      },
      thumbImage: "images/projects/project-2.jpg",
      sliderImages: [
        "images/projects/project-2.jpg",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Découvrir un diapositif de transmission",
      projectInfo:
        "Le but de ce projet c'est d’étudier théoriquement puis en pratique les caractéristiques du cable coaxial, support de propagation de signaux numériques.",
      client: "Mahad WAIS",
      industry: "Cablage",
      date: "Janvier 2023",
      url: {
        name: "Rapport (Google docs)",
        link: "https://docs.google.com/document/d/16nTRnTXS6JYOHTk97b1YcCbire9qsshxzGIu45SZzEU/edit?usp=sharing",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/osamakhait/",
        github: "https://github.com/OsamaKhait",
        mail: "mailto:osama@khait.fr",
      },
      thumbImage: "images/projects/project-3.jpg",
      sliderImages: [
        "images/projects/project-3.jpg",
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "Trame-Ethernet",
      projectInfo:
        "Réalisation d'une application web dans le but d'afficher des trames Ethernet issues des essais de validation fonctionnelle d‘un module spatial en décodant une partie des trames, le travail effectué comporte : Élaboration d'un cahier des charges définissant les besoins et les spécifications du client, Création d'un site web permettant la consultation des données des trames du test sélectionné, Mise en place d'une base de données pour stocker les informations requises.",
      client: "Mahad WAIS",
      technologies: "Raspberry, HTML5, CSS3, , Python, PHP",
      industry: "Développement informatique",
      date: "Juillet 2023",
      url: {
        name: "Github",
        link: "https://github.com/OsamaKhait/Sniffer-Ethernet",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/osamakhait/",
        github: "https://github.com/OsamaKhait",
        mail: "mailto:osama@khait.fr",
      },
      thumbImage: "images/projects/project-4.jpg",
      sliderImages: [
        "images/projects/project-4.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "GSB-Frais",
      projectInfo:
        "GSB-Frais est une application web Symfony développée pour la gestion des frais professionnels dans l’entreprise fictive GSB (Galaxy Swiss Bourdin). Les visiteurs médicaux peuvent y saisir leurs dépenses mensuelles (transport, repas, hébergement…), tandis que les comptables valident les fiches via une interface sécurisée. L’application repose sur un système d’authentification, gère l’historique des saisies et respecte les règles métier de validation. Elle répond aux enjeux de traçabilité, de sécurité et de gestion multi-utilisateurs, dans un environnement ergonomique et structuré.",
      technologies: "Symfony, PHP, MySQL, HTML, CSS",
      industry: "Développement web",
      date: "2024",
      url: {
        name: "Documentation",
        link: "https://docs.google.com/document/d/1jA6X5kclVBzt-jrvUeE11Hzhp8-bQUAKPcFcFJlW_i4/edit?usp=sharing",
      },
      socialLinks: {
        github: "https://github.com/OsamaKhait/GsbFrais",
        linkedin: "https://www.linkedin.com/in/osamakhait/",
        mail: "mailto:osama@khait.fr",
      },
      thumbImage: "images/projects/project-4.jpg", // à adapter avec le bon visuel
      sliderImages: [
        "images/projects/gsb-frais.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "GSB-Visite",
      projectInfo:
        "GSB-Visite est une application Android développée pour les visiteurs médicaux de GSB, entreprise pharmaceutique fictive. Elle permet l’authentification sécurisée des utilisateurs, la consultation des praticiens, la création et modification de rapports de visite, ainsi que l’accès à l’historique des visites. Conçue selon l’architecture MVC, elle utilise Retrofit pour communiquer avec une API REST sécurisée, échangeant des données au format JSON. Chaque visite suit un cycle complet (création, modification, consultation, archivage), et l’accès est contrôlé par un système d’authentification par token.",
      technologies: "Android, Java, Retrofit, API REST, JSON",
      industry: "Développement mobile",
      date: "2024",
      url: {
        name: "Github",
        link: "https://github.com/OsamaKhait/GSB-Visite",
      },
      socialLinks: {
        github: "https://github.com/OsamaKhait",
        linkedin: "https://www.linkedin.com/in/osamakhait/",
        mail: "mailto:osama@khait.fr",
      },
      thumbImage: "images/projects/project-4.jpg", // à adapter avec le bon visuel
      sliderImages: [
        "images/projects/gsb-visite.jpg",
      ],
      categories: [filters.DESIGN],
    },
    
    
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      const filterValue = filterKey === "*" ? "*" : `.${filterKey}`;
      isotope.current.arrange({ filter: filterValue });
    }
  }, [filterKey, imagesLoaded]);
  

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              Mes Projets
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                Tous
              </button>
            </li>
            {Object.keys(filters).map((key, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " + (filterKey === filters[key] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[key])}
                >
                  {filterLabels[filters[key]]}
                </button>
              </li>
            ))}

          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;