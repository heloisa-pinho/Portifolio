let currentSlide = 1;
const totalSlides = 5;

// Função para avançar para o próximo slide
function nextSlide() {
  currentSlide = (currentSlide % totalSlides) + 1;
  document.getElementById("img" + currentSlide).checked = true;
}

// Função para voltar ao slide anterior
function prevSlide() {
  currentSlide = ((currentSlide - 2 + totalSlides) % totalSlides) + 1;
  document.getElementById("img" + currentSlide).checked = true;
}
