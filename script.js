// function openTab(event, tabId) {
//     // Cache tous les contenus
//     document.querySelectorAll(".tab-content").forEach(content => {
//         content.classList.remove("active");
//     });

//     // Désactive tous les boutons
//     document.querySelectorAll(".tab-button").forEach(button => {
//         button.classList.remove("active");
//     });

//     // Active l'onglet sélectionné
//     document.getElementById(tabId).classList.add("active");
//     event.currentTarget.classList.add("active");

//     console.log(tabId)
// }

// Menu ACCORDEON

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
        let content = this.closest('.accordion').querySelector('.accordion-content');
        let icon = this.querySelector('img');
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.classList.remove('rotate');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.classList.add('rotate');
            content.style.padding = "px";
        }
    });
});

// Menu CAROUSSEL

document.querySelectorAll('.carousel').forEach(carousel => {
    let index = 0;
    const container = carousel.querySelector('.carousel-container');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function updateCarousel() {
        const itemWidth = carousel.clientWidth; // largeur visible du carrousel
        container.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    // Écoute les clics sur les boutons
    carousel.querySelector('.next')?.addEventListener('click', () => {
        index = (index + 1) % totalItems;
        updateCarousel();
    });

    carousel.querySelector('.prev')?.addEventListener('click', () => {
        index = (index - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    // Mets à jour la position si la fenêtre est redimensionnée
    window.addEventListener('resize', updateCarousel);

    // Initialisation au chargement
    updateCarousel();
});


// Gère la taille automatiquement pour textearea (formulaire - message)

document.addEventListener('input', function (event) {
    if (event.target.tagName.toLowerCase() !== 'textarea') return;
    
    const textarea = event.target;
    textarea.style.height = 'auto'; // Réinitialise la hauteur
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajuste à la hauteur du contenu
});

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}