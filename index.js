
let header = document.querySelector('#page-header')
header.style.textAlign = 'left'
header.style.color = 'white'
header.style.backgroundColor = 'black'
header.style.borderColor = 'black'
header.style.borderStyle = 'solid'

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.rotate = '180deg'
}

let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}

let footer = document.querySelector('.footer')
footer.style.color = 'red'

