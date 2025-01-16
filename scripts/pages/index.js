// Objet pour la page d'accueil
class Home {
    constructor() {
      //récupere la classe html pour afficher notre contenu
      this.photographer_home = document.querySelector(".photographer_section");
      // Instancie l'Api avec le chemin de notre JSON
      this.dataApi = new PhotographerApi("./data/photographers.json");
    }
  
    // Fonction principale qui affiche toutes les cartes de photographes sur la page d'accueil
    async main() {
      // Récupère les données de l'api
      const photographersData = await this.dataApi.getPhotographers();
  
      // Parcourt toutes les données de chaque photographe et crée une carte pour chacun
      photographersData
      .map(photographer => new Photographer(photographer))
      .forEach(photographer => {
        // Crée une nouvelle carte grace à notre template HomeCard
        const TemplateHome = new HomeCard(photographer);
        // Ajoute le template
        this.photographer_home.append(TemplateHome.createHomeCard());
      });
    }
  }
  
  // Instancie la classe Home
  const home = new Home();
  home.main();