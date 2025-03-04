//salvo l'elemento con la lampadina spenta in una variabile cercandola per Id
const lampOffElement = document.getElementById('lamp-off');

//salvo l'elemento pulsante in una variabile
const buttonOn = document.querySelector('button');

//faccio in modo che, una volta cliccato il pulsante, l'immagine della lampadina spenta venga sostituita da quella accesa e viceversa
buttonOn.addEventListener('click',
    function(){
        
     if (buttonOn.innerText.includes('Accendi la lampadina!')){
        lampOffElement.src = '../img/yellow_lamp_fix.png';
        lampOffElement.alt = 'lampadina-accesa';
        buttonOn.innerText = 'Spegni la lampadina!';
        
     } else {
        lampOffElement.src = '../img/white_lamp.png';
        lampOffElement.alt = 'lampadina-spenta';
        buttonOn.textContent = 'Accendi la lampadina!';
     }
    } 
)


