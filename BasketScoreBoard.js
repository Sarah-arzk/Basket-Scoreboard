
    let homeScore = 0;
    let guestScore = 0;
    let homeScoreEl = document.getElementById("home-score");
    let guestScoreEl = document.getElementById("guest-score");
    //on recupere la boite noire du score home et guest
    let homeBox = document.querySelector(".first");
    let guestBox = document.querySelector(".second");
    function Increment(team, points) {
        //si l'equipe es Home
        if(team=="home"){
            homeScore+=points;
        }
        //sinon
        else {
            guestScore +=points;
        }
        updateDisplay();//on met a jour l'affichge a l'ecran
        updateLeader(); //on verifie qui est en tete
    }
    //Mettre a jour l'affichage 
    function updateDisplay() {
        //on change le texte du score HOME
        homeScoreEl.textContent = formatScore(homeScore);
        //on change le texte du score guest
        guestScoreEl.textContent = formatScore(guestScore);
    }
    //Formatter le score (00, 01, 02)....
    function formatScore(score) {
        //si le score est inferieur a 10
        if (score < 10) {
            return "0" + score;
        }
        else{
            return score;
        }
    }
    //On met en vert le leader 
    function updateLeader() {
        //on enleve d'abord la classe leader des deux equipes
        homeBox.classList.remove("leader");
        guestBox.classList.remove("leader");
        //si Home a plus de points
        if (homeScore > guestScore) {
            homeBox.classList.add("leader");
        }
        //si guest a plus de points 
        else if (guestScore > homeScore) {
            guestBox.classList.add("leader");
        }
        // si egalite rien ne s'affiche en vert
    }
    //button new game 
    function NewGame() {
        homeScore = 0;
        guestScore = 0;
        updateDisplay();
        //on enleve le vert
        homeBox.classList.remove("leader");
        guestBox.classList.remove("leader");
    }

    