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


