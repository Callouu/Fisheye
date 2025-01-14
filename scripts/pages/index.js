// Objet pour la page d'accueil
class Home {
    constructor() {
      //récupere la classe hml pour afficher notre contenu
      this.photographer_home = document.querySelector(".photographer_section");
      // Instancie l'Api avec le chemin de notre JSON
      this.dataApi = new DataApi("./data/photographers.json");
    }
  
    // Fonction principale qui affiche toutes les cartes de photographes sur la page d'accueil
    async main() {
      // Récupère les données de l'api avec .getAllPhotgraphers
      const allPhotographers = await this.dataApi.getAllPhotographers();
  
      // Parcourt toutes les données de chaque photographe et crée une carte pour chacun
      allPhotographers.forEach((dataHome) => {
        // Crée une nouvelle carte grace à notre template HomeCard
        const TemplateHome = new HomeCard(dataHome);
        // Ajoute le template
        this.photographer_home.append(TemplateHome.createHomeCard());
      });
    }
  }
  
  // Instancie la classe Home
  const home = new Home();
  home.main();