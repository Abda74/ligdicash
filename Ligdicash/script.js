if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function(registration) {
                console.log('Service Worker enregistré avec succès:', registration.scope);
            }, function(error) {
                console.log('L\'enregistrement du Service Worker a échoué:', error);
            });
    });
}

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien

        const targetUrl = this.getAttribute('href');
        // Mettre à jour l'URL sans recharger la page
        window.history.pushState(null, null, targetUrl);

    });
});


