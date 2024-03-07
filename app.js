
    
    
      


        const imgs = document.querySelectorAll('.slides img');
        const next = document.querySelector('.right');
        const previous = document.querySelector('.left');
        
        let index = 0;
        let intervalId;
        
        // Fonction pour passer à l'image suivante
        function nextImage() {
            if (index < 4) {
                imgs[index].classList.remove('active');
                index++;
            } else {
                imgs[index].classList.remove('active');
                index = 0;
            }
            imgs[index].classList.add('active');
        }
        
        // Fonction pour passer à l'image précédente
        function previousImage() {
            if (index > 0) {
                imgs[index].classList.remove('active');
                index--;
            } else {
                imgs[index].classList.remove('active');
                index = 4;
            }
            imgs[index].classList.add('active');
        }
        
        // Fonction pour démarrer le défilement automatique
        function startAutoScroll() {
            intervalId = setInterval(nextImage, 3000); // Changer l'intervalle selon vos préférences
        }
        
        // Fonction pour arrêter le défilement automatique
        function stopAutoScroll() {
            clearInterval(intervalId);
        }
        
        // Gestionnaire d'événement pour le bouton suivant
        next.addEventListener('click', function() {
            nextImage();
            stopAutoScroll(); // Arrêter le défilement automatique lorsqu'on clique sur le bouton suivant
        });
        
        // Gestionnaire d'événement pour le bouton précédent
        previous.addEventListener('click', function() {
            previousImage();
            stopAutoScroll(); // Arrêter le défilement automatique lorsqu'on clique sur le bouton précédent
        });
        
        // Gestionnaire d'événement pour les touches du clavier
        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 37) {
                previousImage();
                stopAutoScroll(); // Arrêter le défilement automatique lorsqu'on utilise les touches de direction
            } else if (e.keyCode === 39) {
                nextImage();
                stopAutoScroll(); // Arrêter le défilement automatique lorsqu'on utilise les touches de direction
            }
        });
        
        // Démarrer le défilement automatique au chargement de la page
        startAutoScroll();
        
        // Arrêter le défilement automatique lorsque la souris passe sur les images
        imgs.forEach(img => {
            img.addEventListener('mouseover', stopAutoScroll);
        });
        
        // Redémarrer le défilement automatique lorsque la souris quitte les images
        imgs.forEach(img => {
            img.addEventListener('mouseout', startAutoScroll);
        });
        



        const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Service de photographie";
            }, 0);
            setTimeout(() => {
                text.textContent = "Shooting photo";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Couverture évènementielle";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);
        

       