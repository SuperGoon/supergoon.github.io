const hexItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const hexBtn = document.querySelector('.hexBtn')
const bodyBgc = document.querySelector('body')
const hex = document.querySelector('.hex')

hexBtn.addEventListener('click', changColor)

function changColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexItem.length)
        hexColor += hexItem[random]
        console.log(hexColor)
    }
    bodyBgc.style.backgroundColor = hexColor
    hex.innerHTML = hexColor
}

changColor()