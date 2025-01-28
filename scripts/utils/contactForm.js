const closeBtn = document.querySelector('.btn_close')
const formBtn = document.getElementById('formBtn')
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const message = document.getElementById('message')
const nameRegex = new RegExp("^[a-zA-Z-]{2,}$")
const emailRegex = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+")


// Afficher le formulaire
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "flex";
}

// Fermer le formulaire
function closeModal() {
    const parent = document.getElementById('first').parentNode;
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Fermeture du formulaire avec le bouton croix
closeBtn.addEventListener("click", closeModal)

/**
* Fonction qui valide ou non le format du prénom
* @param {string} first : Prénom de la personne
* @returns {boolean} : true or false
*/
function validFirstName(first) {
    const parent = document.getElementById('first').parentNode;

    if (!nameRegex.test(first)) {
        parent.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus');
        parent.setAttribute('data-error-visible', 'true');
        return false
    } else {
        parent.setAttribute('data-error-visible', 'false')
        return true
    }
}

/**
* Fonction qui valide ou non le format du nom
* @param {string} last : Nom de la personne
* @returns {boolean} : true or false
*/
function validLastName(last) {
    const parent = document.getElementById('last').parentNode;

    if (!nameRegex.test(last)) {
        parent.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus');
        parent.setAttribute('data-error-visible', 'true');
        return false
    } else {
        parent.setAttribute('data-error-visible', 'false')
        return true
    }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} email : Adresse mail de la personne
* @returns {boolean} : true or false
*/
function validEmail(email) {
    const parent = document.getElementById('email').parentNode;

    if (!emailRegex.test(email)) {
        parent.setAttribute('data-error', 'L\'email n\'est pas valide');
        parent.setAttribute('data-error-visible', 'true');
        return false
    } else {
        parent.setAttribute('data-error-visible', 'false')
        return true
    }
}

/**
* Fonction qui valide ou non le format du message
* @param {string} message : Message de la personne
* @returns {boolean} : true or false
*/
function validMessage(message) {
    const parent = document.getElementById('message').parentNode;

    if (message == null) {
        parent.setAttribute('data-error', 'Le message n\'est pas valide');
        parent.setAttribute('data-error-visible', 'true');
        return false
    } else {
        parent.setAttribute('data-error-visible', 'false')
        return true
    }
}

// Fonction qui permet d'afficher tout les messages d'erreur en même temps
function showError() {
    validFirstName(firstName.value)
    validLastName(lastName.value)
    validEmail(email.value)
    validMessage(message.value)
}

/**
 * Fonction qui permet de tester si tout les champs sont valide avant de confirmer l'envoi
 * @returns {boolean} : true or false
 */
function manageForm() {
    if (
        validFirstName(firstName.value) &&
        validLastName(lastName.value) &&
        validEmail(email.value) &&
        validMessage(message.value)
    ) {
        return true
    } else {
        showError()
        return false
    }
}

// Affichage des valeurs rentrées dans les inputs dans des console.log
function confirm() {
    console.log("NOM : " + lastName.value);
    console.log("PRENOM : " + firstName.value)
    console.log("ADRESSE EMAIL : " + email.value);
    console.log("MESSAGE : " + message.value);
}


formBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const validForm = manageForm()
    if (validForm) {
        confirm()
        closeModal()
    }
})
