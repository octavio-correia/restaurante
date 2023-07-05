function changeBackground(imageClass) {
    var imagensComidas = document.querySelector('.imagensComidas');
    imagensComidas.style.backgroundImage = `url(imagens/${imageClass}.png)`;
}