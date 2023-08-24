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
  title: 'Veterinaria',
  text: 'Final Frontend 3 Digital House',
  image: './images/front3final.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">js</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/fe3-final-falcon-leandro/',
  linkGithub: ''
},{
  id: 2,
  title: 'Cards \n Proyecto Integrador',
  text: 'Cards for an e-commerce of sport shoes. -Under construction',
  image: './images/shoesStore.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">js</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/trabajos-react-presentacion/',
  linkGithub: ''
}, {
  id: 3,
  title: 'ToDo App',
  text: 'Fourth project: interactive to-do application. You can add tasks, mark them as completed and delete them. I combined all my knowledge in this final project and learned to render lists of components from arrays and to work with text entered by the user.',
  image: './images/toDoApp.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/to-do-app/',
  linkGithub: ''
}, {
  id: 4,
  title: 'Calculadora',
  text: 'Third practice: interactive calculator that performs the four basic arithmetic operations. In this project, I practiced my knowledge and worked with flexbox to create a more elaborate structure. I also learned how to install packages with node package manager and learned how to check if a package was added to the dependency list of my React project. I also worked with props.children.',
  image: './images/calculadora.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/calculadora/',
  linkGithub: './LemonPie/index.html'
}, {
  id: 5,
  title: 'Contador',
  text: 'In this second practice I built a click counter. It increments when the blue button is clicked and resets when the purple button is clicked. In this project I learned how to use the useState hook with functional components to maintain and update the state of a component. I also worked with event listeners',
  image: './images/contador.png',
  linkSitioWeb: '',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/contadorDeClicks/',
  linkGithub: ''
}, {
  id: 6,
  title: 'Testimonios',
  text: 'In this practice I built a clone of the freeCodeCamp testimonials section. I learned how to analyze the structure of a component, how to implement it with JSX, how to style a component with CSS and how to render several components passing different props to each of them.',
  image: './images/testimonios.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/testimonios-freecodecamp/',
  linkGithub: ''
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
                <img class="${'animacion-none'}" src="${modalesContenido[i].image}"/>
                <div id="modal-preview-shadow"></div>
                <div class="modal-preview-enlaces">
                    <a href="${modalesContenido[i].linkSitioWeb}" target=" _blank">GitHub</a>
                    <a href="${modalesContenido[i].linkSitioWeb}" target=" _blank">Deploy</a>
                </div>
            </div>
          `
        }
      }
    });
  }
};
atraparIdCardClickeada();

// https://falconleandro.github.io/fe3-final-falcon-leandro/