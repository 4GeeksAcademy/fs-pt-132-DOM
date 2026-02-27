import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//nos traemos los elementos html que vamos a modificar a js
const card = document.querySelector('#card')
const cardTitle = document.querySelector('#cardTitle')
const cardContent = document.querySelector('#cardContent')
const body = document.body
const cardFooter = document.querySelector('#cardFooter')
const cardImg = document.querySelector('#cardImg')

//modificamos src y alt de la imagen (o cualquier otra etiqueta) usando setAttribute
cardImg.setAttribute('src', 'https://picsum.photos/210/300')
cardImg.setAttribute('alt', 'antes aqui habian gatos...')

console.log(cardTitle)
console.log(typeof cardTitle)
//cambio de texto
cardTitle.innerText = '<strong>Proezas de Pepe</strong>' // para cambiar el texto de la etiqueta
//modificacion de clases
cardTitle.classList.add('p-5') // añadimos una nueva clase a la etiqueta
cardTitle.classList.replace('p-5', 'bg-primary') // cambiamos la clase p-5 por bg-primary
cardTitle.classList.remove('bg-primary') // eliminamos la clase bg-primary

console.log(card.classList)
console.log(typeof card.classList)

//innerText --> SOLO ES TEXTO
//innerHTML ---> ES HTML
cardContent.innerHTML = `
<div class="bg-primary">
  <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis quis fugiat odit eveniet aspernatur modi. Alias perferendis a deserunt ipsum omnis. Non similique aut expedita, placeat distinctio labore perspiciatis.
  </p>
  <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis quis fugiat odit eveniet aspernatur modi. Alias perferendis a deserunt ipsum omnis. Non similique aut expedita, placeat distinctio labore perspiciatis.
  </p>
</div>
`
console.log(cardContent);


const footer = document.createElement('footer')
footer.innerText = 'nuevo footer para la card'
cardFooter.appendChild(footer)



const paraAngela = ['pepe', 'lola', 'maria', 'luisa']

//generar de manera dinamica a partir de un array

//creamos un elemento: 
const nameList = document.createElement('ul')
console.log(nameList)
//añado el elemnto al html
body.appendChild(nameList)

paraAngela.forEach((el, i) => {
  //creamos elemento html
  const newLi = document.createElement('li')
  //añadimos tantas clases como queramos y podemos usar ternarias para condicionarlo
  newLi.classList.add('list-item', i % 2 == 0 ? "bg-primary" : "bg-secondary")
  // innerText para insertar el texto que va a mostrar
  newLi.innerText = el
  console.log(newLi)
  //se lo añadimos como hijo a nameList que es el la etiqueta UL que cree
  nameList.appendChild(newLi)
})


const data = [
  { name: 'pepe', age: 55 }, { name: 'lola', age: 22 }, { name: 'matia', age: 18 },
  { name: 'barbara', age: 81 }, { name: 'pepe', age: 55 }, { name: 'lola', age: 22 },
  { name: 'matia', age: 18 }, { name: 'barbara', age: 81 }, { name: 'pepe', age: 55 },
  { name: 'lola', age: 22 }, { name: 'matia', age: 18 }, { name: 'barbara', age: 81 }
]
const exampleWrapper = document.createElement('div')
exampleWrapper.classList.add('row')
data.forEach(el => {
  const example = document.createElement('div')
  example.classList.add('col-sm-6', 'col-md-4', 'col-lg-3')
  example.innerHTML = `
    <div>
    <h1>name: ${el.name}</h1>
    <h2>age: ${el.age}</h2>

    </div>
  `
  exampleWrapper.appendChild(example)
})
console.log(exampleWrapper)
body.appendChild(exampleWrapper)



// eventos
const btnSusto = document.querySelector('#btnSusto')
const susto = document.querySelector('#susto')
//let counter = 0
btnSusto.addEventListener('click', () => {
  // counter++
  // if (counter==10){
  //   alert('DEJA DE TOCARME!!!!!')
  //   counter = 0
  // }
  //  console.log('me estas tocando....')
  if (susto.classList.contains('hidden')) {
    btnSusto.innerText = 'esconde eso'
    return susto.classList.remove('hidden')
  }
  btnSusto.innerText = 'a que te asusto de nuevo'
  susto.classList.add('hidden')
})

let name = '' // '' "es lo mismo" que null
const inputName = document.querySelector('#inputName')
const showName = document.querySelector('#showName')
const magic = document.querySelector('#magic')

inputName.addEventListener('change', (e) => {
  console.log(e.target.value)
  name = e.target.value
  showName.innerText = name
  if (name) {
    magic.classList.remove('hidden')
  } else {
    magic.classList.add('hidden')
  }
})
