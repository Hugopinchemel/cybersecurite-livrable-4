// Sélectionner tous les termes
const termes = document.querySelectorAll('.terme');

// Ajouter un gestionnaire d'événement sur chaque terme
termes.forEach(terme => {
    terme.addEventListener('click', () => {
        const definition = terme.nextElementSibling;

        // Fermer les autres définitions ouvertes
        document.querySelectorAll('.definition').forEach(def => {
            if (def !== definition && def.classList.contains('show')) {
                def.classList.remove('show');
                def.style.display = 'none';
            }
        });

        // Afficher ou cacher la définition associée
        if (definition.classList.contains('show')) {
            definition.classList.remove('show');
            definition.style.display = 'none';
        } else {
            definition.classList.add('show');
            definition.style.display = 'block';
        }
    });
});
