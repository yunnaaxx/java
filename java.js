const MINIMUM = 15;
const MAXIMUM = 20;

const jmenoUzivatele = window.prompt('Kdo jseš?', 'Jméno');
window.alert(`Ahoj, ${jmenoUzivatele}!`);
const jeAno = window.confirm('Chceš si zahrát?');

console.log(jeAno);




if (jeAno) {
  const rokNarozeni = window.prompt('V jakém roce ses narodil/a?');
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
      window.alert(`${vekUzivatele} Sho sho!`);
    }
  }
}

else {
  window.alert('Ty jsi nechceš zahrát, to mě mrzí!');
}