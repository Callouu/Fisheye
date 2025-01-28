// Afficher le formulaire
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
}

// Fermer le formulaire
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Affichage des valeurs rentrées dans les inputs dans des console.log
function confirm() {
    let firstName = document.getElementById('first').value
    let lastName = document.getElementById('last').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value

    console.log("NOM : " + lastName);
    console.log("PRENOM : " + firstName)
    console.log("ADRESSE EMAIL : " + email);
    console.log("MESSAGE : " + message);
}

const closeBtn = document.querySelector('.btn_close')
closeBtn.addEventListener("click", closeModal)

const formBtn = document.getElementById('formBtn')
formBtn.addEventListener("click", (e) => {
    e.preventDefault()
    confirm()
    closeModal()
})
