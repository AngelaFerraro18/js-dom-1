//salvo l'elemento con la lampadina spenta in una variabile cercandola per Id
const lampOffElement = document.getElementById('lamp-off');

//salvo l'elemento pulsante in una variabile
const buttonOn = document.querySelector('button');

//faccio in modo che, una volta cliccato il pulsante, l'immagine della lampadina spenta venga sostituita da quella accesa
buttonOn.addEventListener('click',
    function(){
        lampOffElement.src = 'img/yellow_lamp_fix.png';
        lampOffElement.alt = 'lampadina-accesa';
    }
)