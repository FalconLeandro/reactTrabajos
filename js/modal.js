// Ventana modal
var modal = document.getElementById("ventanaModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Si el usuario hace clic en la x, la ventana se cierra
span.addEventListener("click", function () {
  modal.style.display = "none";
});
// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

let modalesContenido = [{
  id: 1,
  title: 'Cards \n Proyecto Integrador',
  text: 'Acá aprendí animaciones',
  image: './images/capturaPetShop.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">js</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/trabajos-react-presentacion/',
  linkGithub: ''
}, {
  id: 2,
  title: 'ToDo App',
  text: 'Acá integré los conceptos vistos.',
  image: './images/toDoApp.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/to-do-app/',
  linkGithub: ''
}, {
  id: 3,
  title: 'Calculadora',
  text: 'En este trabajo aprendí el maquetado de formularios y algunas funcionalidades con javaScript.',
  image: './images/calculadora.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/calculadora/',
  linkGithub: './LemonPie/index.html'
}, {
  id: 4,
  title: 'Contador',
  text: 'Acá descubrí la practicidad de flexbox.',
  image: './images/capturaPizzeria.png',
  linkSitioWeb: '',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/contadorDeClicks/',
  linkGithub: ''
}, {
  id: 5,
  title: 'Testimonios',
  text: 'En este trabajo conocí las hojas de estilo en css y su implementación.',
  image: './images/capturaBatmanCv.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/testimonios-freecodecamp/',
  linkGithub: './LemonPie/index.html'
}
];

/* ------------------------- funcion para atrapar el evento de clickeado ------------------------- */
function atraparIdCardClickeada() {
  //agarro todos los cards
  const cards = document.querySelectorAll('.card');
  console.log(cards);
  const modalContenedor = document.querySelector('.contenido-modal');

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', e => {

      //accedo al id que tiene la card clickeada
      var id = e.target.getAttribute("id");

      for (let i = 0; i < modalesContenido.length; i++) {

        if (id == modalesContenido[i].id) {
          modal.style.display = "block";

          modalContenedor.innerHTML = `
            <div class="contenedor-modal-descripcion">
                <h2 class="modal-descripcion-titulo">${modalesContenido[i].title}</h2>
                <p>${modalesContenido[i].text}</p>
                
                <div>
                  ${modalesContenido[i].techList}
                </div>
            </div>
            <div class="contenedor-modal-preview">
                <img class="${id == 6 || id == 4 || id == 5 ? 'animacion-none' : ' '}" src="${modalesContenido[i].image}"/>
                <div id="modal-preview-shadow"></div>
                <div class="modal-preview-enlaces">
                    <a href="${modalesContenido[i].linkSitioWeb}" target=" _blank">GitHub</a>
                    <a href="${modalesContenido[i].linkSitioWeb}" target=" _blank">Web Site</a>
                </div>
            </div>
          `
        }
      }
    });
  }
};
atraparIdCardClickeada();