// Affichage du menu déroulant
const filterMenu = document.querySelector(".dropdown_content");
const filterMenuButton = document.querySelector(".btn_drop");
const filterButtons = document.querySelectorAll(".dropdown_content button");

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

// Affiche de l'élément selectioné et on envoie dans methode 'applyFilter'
const currentFilter = document.querySelector('#current_filter');
const allFilters = Array.from(document.querySelectorAll('.dropdown_content li button'))

let filterAlreadySelected = allFilters.find(filter => filter.textContent == currentFilter.textContent);
filterAlreadySelected.style.display = 'none';

allFilters.forEach(filter => {
filter.addEventListener('click', () => {
currentFilter.textContent = filter.textContent;
if(filterAlreadySelected) {
    filterAlreadySelected.style.display = 'block';
}
filterAlreadySelected = filter;
filterAlreadySelected.style.display = 'none';
// eslint-disable-next-line no-undef
profile.applyFilter(filter.textContent)
})
})
