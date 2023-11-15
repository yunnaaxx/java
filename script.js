const target = document.getElementById("target");
const squareSize = 500; // Velikost čtverce
const imagePaths = ['Ganyu.jpg', '01.png']; // Seznam cest k obrázkům
let currentImageIndex = 0; // Index aktuálního obrázku

function getRandomPosition() {
    const maxX = squareSize - target.offsetWidth;
    const maxY = squareSize - target.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    return { x: randomX, y: randomY };
}

function moveTarget() {
    const newPosition = getRandomPosition();
    target.style.left = newPosition.x + "px";
    target.style.top = newPosition.y + "px";
    
    // Střídání obrázků
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    target.style.backgroundImage = `url(${imagePaths[currentImageIndex]})`;
}

target.addEventListener("click", () => {
    moveTarget();
});

// Initial placement
moveTarget();






const MINIMUM = 15;
const MAXIMUM = 20;

const jmenoUzivatele = window.prompt('Kdo jseš?', 'Jméno');
window.alert(`Ahoj, ${jmenoUzivatele}!`);
const jeAno = window.confirm('Chceš si zahrát?');

console.log(jeAno);




if (jeAno) {
  const rokNarozeni = window.prompt('V jakém roce ses narodila?');
  const narozeniny = window.confirm('Chceš si zahrát?');
  let vekUzivatele = 2023 - Number(rokNarozeni);

  if (!narozeniny) {
    vekUzivatele --;
  }

  if (Number(vekUzivatele) >= MINIMUM && Number(vekUzivatele) < MAXIMUM) {
    console.log(vekUzivatele);
    window.alert(`Přeji příjemnou zábavu!`);
  }

  else {
    if (!isNaN(Number(vekUzivatele))) {
      window.alert(`Vítej ve hře!`);
    }
    else {
      window.alert(`${vekUzivatele} Ty jsi nechceš zahrát, to mě mrzí!`);
    }
  }
}

else {
  window.alert('Shoo shoo!');
}