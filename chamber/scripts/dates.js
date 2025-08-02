document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("currentyear").textContent = "©" + new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last modified : " + document.lastModified;
   
        const messageContainer = document.querySelector('.sidebar-message');
        const lastVisit = localStorage.getItem('lastVisit');
        const currentTime = Date.now();

        let message = "";

        if (!lastVisit) {
            // Première visite
            message = "Welcome! Let us know if you have any questions.";
        } else {
            const msInOneDay = 1000 * 60 * 60 * 24;
            const timeDifference = currentTime - Number(lastVisit);
            const daysBetween = Math.floor(timeDifference / msInOneDay);

            if (timeDifference < msInOneDay) {
                message = "Back so soon! Awesome!";
            } else if (daysBetween === 1) {
                message = "You last visited 1 day ago.";
            } else {
                message = `You last visited ${daysBetween} days ago.`;
            }
        }

        // Afficher le message dans la sidebar
        if (messageContainer) {
            messageContainer.textContent = message;
        }

        // Mettre à jour la date de visite
        localStorage.setItem('lastVisit', currentTime.toString());

});
