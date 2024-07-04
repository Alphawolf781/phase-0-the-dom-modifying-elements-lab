// Write your code here
const mainElement = document.querySelector('main#main')

mainElement.remove()


const newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = 'victory'
newHeader.textContent= 'vincent is the champion'
