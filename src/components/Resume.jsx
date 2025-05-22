import React from "react";
import resumeFile from "../documents/resume.pdf";


const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2025 – 2026",
      title: "Bachelor concepteur développeur d’applications",
      place: "CESI | Lyon",
      desc: "Formation d’un an en alternance menant à un diplôme Bac+3, axée sur le développement, la sécurisation d’applications et la gestion de projets informatiques.",
    },    
    {
      yearRange: "2023 - 2025",
      title: "BTS Services informatiques aux organisations",
      place: "Lycée Gabriel Fauré",
      desc: "À Annecy en France, Formation de deux ans menant à l'obtention d'un Brevet de technicien supérieur axé sur les technologies informatiques et la cybersécurité.",
    },
    {
      yearRange: "2021 - 2023",
      title: "BUT - Réseaux et Télécomunications",
      place: "IUT - Nice Cote d'Azur",
      desc: "À Sophia Antipolis en France, Formation de trois ans menant à l'obtention d'un Bachelor Universitaire de Technologie axé sur les technologies des réseaux (mobiles, WiFi), les technologies informatiques (architecture de l'Internet, exploitation de systèmes virtualisés, cloud…) et la cybersécurité.",
    },
    {
      yearRange: "2020 - 2021",
      title: "Baccalauréat Scientifique : Option Physique-chimie",
      place: "Achourouk",
      desc: "À Khouribga, Maroc. Enseignement général, Série Scientifique, Option Physique-chimie.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "janv. 2025 - févr. 2025",
      title: "Stagiaire",
      place: "Meaplus - Malmö, Suède",
      desc: `Participation à un projet d’envoi sécurisé de messages avec l’application web SEFOS dans le cadre de mon stage de deuxième année de BTS SIO au Lycée Gabriel Fauré à Annecy.\n• Développement d’un script PowerShell permettant de récupérer et transmettre des fichiers scannés depuis une imprimante sécurisée (Papercut) vers la plateforme SEFOS via une API, à partir d’un fichier JSON.\n• Création de trois formulaires avec Blazor pour l’envoi de messages via SEFOS :\n  - Envoi de messages anonymes\n  - Lien sécurisé pour messages privés\n  - Conversation sécurisée avec une organisation via une API\n• Conception de deux formulaires pour l’achat du système SEFOS (SaaS ou On-premises), remplaçant l’ancien processus basé sur Excel.`,
    },
    {
      yearRange: "Juin-2024",
      title: "Stage Première année BTS",
      place: "Airbus Protect - Toulouse",
      desc: `Dans le cadre de mon stage de première année de BTS SIO au Lycée Gabriel Fauré à Annecy.\n• Participation à un projet de gestion des risques industriels.\n• Analyse des besoins et des spécifications techniques.\n• Création de composants Angular pour :\n  - L’importation, l’exportation et la suppression de fichiers PDF ou images.\n  - La gestion des effets et des actions contrôlant les composants.`,
    },
    {
      yearRange: "2022-2023",
      title: "Projet Universitaire d'une Trame Ethernet",
      place: "IUT - Nice Cote d'Azur",
      desc: `Réalisation d'une application web permettant d’afficher des trames Ethernet issues des essais de validation fonctionnelle d’un module spatial.\n• Décodage d’une partie des trames en extrayant les données utiles.\n• Affichage structuré et dynamique de l’analyse dans une interface web.`,
    },
    {
      yearRange: "2021 - 2023",
      title: "Projet Universitaire d'un Banc Avionique",
      place: "IUT - Nice Cote d'Azur",
      desc: `Création d'une application web pour le suivi des interventions sur un banc avionique.\n• Prise de photos avant/après chaque intervention technique.\n• Archivage automatique des clichés pour assurer la traçabilité des modifications.\n• Interface simple pour les techniciens.`,
    },
  ];
  

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
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
            Professionnel
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            CV
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Formations
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p
                    className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {value.desc}
                  </p>

                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Expériences Professionnels
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p
                    className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Télécharger CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
