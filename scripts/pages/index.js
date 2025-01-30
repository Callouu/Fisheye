// Objet pour la page d'accueil
class Home {
    constructor() {
      //récupere la classe html pour afficher notre contenu
      this.photographer_home = document.querySelector(".photographer_section");
      // Instancie l'Api avec le chemin de notre JSON
      // eslint-disable-next-line no-undef
      this.dataApi = new PhotographerApi("./data/photographers.json");
    }
  
    // Fonction principale qui affiche toutes les cartes de photographes sur la page d'accueil
    async main() {
      // Récupère les données de l'api
      const photographersData = await this.dataApi.getAllPhotographers();
  
      // Parcourt toutes les données de chaque photographe et crée une carte pour chacun
      photographersData
      // eslint-disable-next-line no-undef
      .map(photographer => new Photographer(photographer))
      .forEach(photographer => {
        // Crée une nouvelle carte grace à notre template HomeCard
        // eslint-disable-next-line no-undef
        const TemplateHome = new HomeCard(photographer);
        this.photographer_home.append(TemplateHome.createHomeCard());
      });
    }
  }
  
  // Instancie la classe Home
  const home = new Home();
  home.main();