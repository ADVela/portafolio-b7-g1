// CRUD
// Creae Leer actualizar Borrar



//alert("Hola mundo");

var app = document.getElementById('app');

//Creara un objeto 
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//Usar el punto es para llamr una accion o una propiedad
typewriter
  .pauseFor(2500)
  .typeString('Karla Velazquez')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Fronted jr. ')
  .pauseFor(1000)
  .start();


let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriterFrase
  .pauseFor(2500)
  .typeString('UN VIAJE DE 1000 MILLAS COMIENZA CON UN SOLO PASO.')
  .pauseFor(300)
  .deleteAll()
  .typeString('Lao Tse')
  .pauseFor(1000)
  .start();


  let audioElement; // Variable para almacenar el objeto Audio


  const mainElement = document.querySelector('main'); // Seleccionar la etiqueta <main>
  
  mainElement.addEventListener('click', function() {
      if (!audioElement) {
          audioElement = new Audio('assets/music/bts.mp3');
      }
      audioElement.play();
  });
  
  const pauseButton = document.getElementById('pauseButton');
  
  pauseButton.addEventListener('click', function() {
      if (audioElement.paused) {
          audioElement.play();
          pauseButton.textContent = "Pausar";
      } else {
          audioElement.pause();
          pauseButton.textContent = "Reanudar";
      }
  });




