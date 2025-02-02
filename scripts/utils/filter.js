const filterMenu = document.querySelector(".dropdown_content");
const filterMenuButton = document.querySelector(".btn_drop");
const filterButtons = document.querySelectorAll(".dropdown_content button");

// Affichage du menu déroulant
filterMenuButton.addEventListener("click", () => {
    const isExpanded = filterMenuButton.getAttribute("aria-expanded") === "true" || false;
    filterMenuButton.setAttribute("aria-expanded", !isExpanded);
    filterMenu.classList.toggle("curtain_effect");
    document.querySelector(".fa-chevron-up").classList.toggle("rotate");

    const newAriaHiddenValue = filterMenu.classList.contains("curtain_effect") ? "false" : "true";
    filterMenu.setAttribute("aria-hidden", newAriaHiddenValue);

    const newTabIndexValue = filterMenu.classList.contains("curtain_effect") ? "0" : "-1";
    filterButtons.forEach(button => button.setAttribute("tabindex", newTabIndexValue));
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!filterMenu.contains(event.target) && !filterMenuButton.contains(event.target)) {
        filterMenu.classList.remove("curtain_effect");
        filterMenuButton.setAttribute("aria-expanded", "false");
        document.querySelector(".fa-chevron-up").classList.remove("rotate");
        filterMenu.setAttribute("aria-hidden", "true");
        filterButtons.forEach(button => button.setAttribute("tabindex", "-1"));
    }
});

// Affiche de l'élément selectioné et on envoie dans methode 'applyFilter'
const currentFilter = document.querySelector('#current_filter');
const allFilters = Array.from(document.querySelectorAll('.dropdown_content li button'))

let filterAlreadySelected = allFilters.find(filter => filter.textContent == currentFilter.textContent);
filterAlreadySelected.style.display = 'none';


// Affiche sur le bouton le texte selectioné du menu
allFilters.forEach(filter => {
filter.addEventListener('click', () => {
currentFilter.textContent = filter.textContent;
if(filterAlreadySelected) {
    filterAlreadySelected.style.display = 'block';
}
filterAlreadySelected = filter;
filterAlreadySelected.style.display = 'none';

// On envoie la valeur du bouton dans notre profile pour permettre le triage
// eslint-disable-next-line no-undef
profile.applyFilter(filter.textContent)
})

// retourne au bouton principal après avoir cliquer sur la touche entrer
filter.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        filterMenuButton.focus();
        profile.applyFilter(filter.textContent)
    }   
});
})

