const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const closedCookie = document.querySelector('#closedCookie')
const anotherCookie = document.querySelector('button')
let paper = document.querySelector('#paper')
let messages = ['Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.', 
'A vida trará coisas boas se tiver paciência.',
'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
'Não compense na ira o que lhe falta na razão',
'Defeitos e virtudes são apenas dois lados da mesma moeda.',
'A maior de todas as torres começa no solo.',
'Não há que ser forte. Há que ser flexível.',
'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
'A juventude não é uma época da vida, é um estado de espírito.',
'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
]

let positionMessages = Math.round(Math.random() * 10)

closedCookie.addEventListener('click', toggleScreen)
anotherCookie.addEventListener('click', toggleScreen)

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
  
  newMessage()
}

function newMessage() {
  paper.innerText = messages[positionMessages]
  positionMessages = Math.round(Math.random() * 10)
 }
