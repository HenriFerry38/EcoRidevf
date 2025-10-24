import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Covoiturages", "Covoiturages", "/pages/covoiturages.html"),
    new Route("/Connexion", "Connexion", "/pages/connexion.html"),
    new Route("/Contact", "Contact", "/pages/contact.html"),
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";