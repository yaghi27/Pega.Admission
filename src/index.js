import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "welcome to acelis":
            "   Groupe Accelis Education is delighted to welcome you on the student portal of Ferrieres, School of French Excellence and 89, Higher digital school. This platform will guide you throughout your academic journey in our school and during your professional career. We invite you to create your profile and to fill up your personal information as well as the program chosen to add your application documents.",
          required: "This field is required",
          findout: "How did you find out about our school ?",
          Personal: "Personal",
          Contact: "Contact",
          Academic: "Academic",
          Languages: "Languages",
          Summary: "Summary",
          Title: "Title",
          "Mr.": "Mr.",
          "Mrs.": "Mrs.",
          Other: "Other",
          "First Name": "First Name",
          "Middle Name": "Middle Name",
          "Last Name": "Last Name",
          Nationality: "Nationality",
          "Place/Village Of Birth": "Place/Village Of Birth",
          "Country Of Birth": "Country Of Birth",
          "Date Of Birth": "Date Of Birth",
          Precedent: "Previous",
          Suivant: "Next",
          "Country Name": "Country Name",
          "Local Time Zone": "Local Time Zone",
          "Building Number": "Building Number",
          "Street name": "Street name",
          "Small Locality": "Small Locality",
          City: "City",
          "Postal Code": "Postal Code",
          Spécialisation: "Admission Program",
          "Sélectionner Programme": "Program Selection",
          "Période de Début": "Start Period",
          "Sélectionner la période de rentrée": "Select start period",
          "Choix du programme": "Program Choice",
          "Année d’entrée": "Entrance year",
          "Première Année": "First year",
          "Deuxième Année": "Second year",
          "Troisième Année": "Third year",
          Proficiency: "Proficiency",
          "Please add a language": "Please add a language",
          French: "French",
          German: "German",
          English: "English",
          Arabic: "Arabic",
          Spanish: "Spanish",
          Italian: "Italian",
          Russian: "Russian",
          Beginner: "Beginner",
          Intermediate: "Intermediate",
          Expert: "Expert",
          Native: "Native",
          addlanguage: "Add New Language",
          Submit: "Submit",
        },
      },
      fr: {
        translation: {
          "welcome to acelis":
            "   Le groupe Accelis Éducation vous souhaite la bienvenue sur le portail étudiant de Ferrières, l'Ecole de l'Excellence à la Française et de 89, l’École Supérieure du Numérique. Cet espace vous suivra tout au long de votre scolarité et de votre vie professionnelle. Nous vous invitons à créer votre profil puis à renseigner vos coordonnées afin de postuler au programme de votre choix en déposant votre dossier de candidature.",
          required: "Ce champ est obligatoire",
          findout: "Comment avez-vous découvert notre école ?",
          Personal: "Information Personelle",
          Contact: "Coordonnées",
          Academic: "Choix académique",
          Languages: "Langues",
          Summary: "Résumé",
          Title: "Civilité",
          "Mr.": "M.",
          "Mrs.": "Mme.",
          Other: "Autre",
          "First Name": "Prénom",
          "Middle Name": "Deuxième prénom",
          "Last Name": "Nom de famille",
          Nationality: "Nationalité",
          "Place/Village Of Birth": "Lieu de naissance",
          "Country Of Birth": "Pays D'origine",
          "Date Of Birth": "Date de naissance",
          Precedent: "Précédent",
          Suivant: "Suivant",
          "Country Name": "Nom du pays de résidence",
          "Local Time Zone": "Fuseau Horaire Local",
          "Building Number": "Numéro du Bâtiment",
          "Street name": "Nom de Rue",
          "Small Locality": "Complément d’adresse",
          City: "Ville",
          "Postal Code": "Code Postal",
          Spécialisation: "Spécialisation",
          "Sélectionner Programme": "Sélectionner Programme",
          "Période de Début": "Période de Début",
          "Sélectionner la période de rentrée":
            "Sélectionner la période de rentrée",
          "Choix du programme": "Choix du programme",
          "Année d’entrée": "Année d’entrée",
          "Première Année": "Première Année",
          "Deuxième Année": "Deuxième Année",
          "Troisième Année": "Troisième Année",
          "Please add a language": "Pas de langue(s) ajoutee(s)",
          Proficiency: "Niveau",
          French: "Francais",
          German: "Allemand",
          English: "Anglais",
          Arabic: "Arabe",
          Spanish: "Espagnol",
          Italian: "Italien",
          Russian: "Russe",
          Beginner: "Debutant",
          Intermediate: "Intermediaire",
          Expert: "Expert",
          Native: "Langue maternelle",
          addlanguage: "Ajouter Une Nouvelle Langue",
          Submit: "Soumettre",
          "By searching on the internet (Google, Bing...)":
            "Par recherches internet (Google, Bing...)",
          "On social medias": "Par les réseaux sociaux",
          "Through word of mouth": "Bouche à oreilles",
          "High school meeting": "Forum lycée",
          "School counselor": "Conseiller d’orientation",
          "Student fair": "Salon étudiant",
          Cancel: "Reutour",
          Save: "Enregistrer",
        },
      },
    },
    lng: document.querySelector("html").lang,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

// function App() {
//   const { t } = useTranslation();

//   return <h2>{t("Welcome to React")}</h2>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
