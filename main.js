const carouselPuro = document.getElementById('carousel-puro')
let items = document.querySelectorAll('.item-carousel-puro')
const carouselMarcas = document.getElementById('carousel-marcas')
let itemsMarcas = document.querySelectorAll('.item-carousel-marcas')
let curretIndex = 0

function nextSlide() {
    carouselPuro.appendChild(items[0])
    items = document.querySelectorAll('.item-carousel-puro')
}

function prevSlide() {
    carouselPuro.prepend(items[items.length - 1])
    items = document.querySelectorAll('.item-carousel-puro')
}

function autoSlide() {
    nextSlide()
}

setInterval(autoSlide, 3000)

function nextSlideMarcas() {
    carouselMarcas.appendChild(itemsMarcas[0])
    itemsMarcas = document.querySelectorAll('.item-carousel-marcas')
}

function prevSlideMarcas() {
    carouselMarcas.prepend(itemsMarcas[itemsMarcas.length - 1])
    itemsMarcas = document.querySelectorAll('.item-carousel-marcas')
}

function autoSlideMarcas() {
    nextSlideMarcas()
}

setInterval(autoSlideMarcas, 3000)