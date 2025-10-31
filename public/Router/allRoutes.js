import Route from "/public/Router/Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/public/pages/home.html"),
    new Route("/Covoiturages", "Covoiturages", "/public/pages/covoiturages.html"),
    new Route("/signin", "Connexion", "/public/pages/auth/signin.html"),
    new Route("/signup", "Inscription", "/public/pages/auth/signup.html"),
    new Route("/account", "Mon Compte", "/public/pages/auth/account.html"),
    new Route("/Contact", "Contact", "/public/pages/contact.html"),
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";