document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.imagemSlider');
    const audio = new Audio('./sounds/tomara.mp3')
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('show');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('show');
    }

    setInterval(nextSlide, 3000);
    audio.play()

});

setTimeout(() => {
    const carta = document.getElementById("carta");
    const yOffset = (window.innerHeight - carta.offsetHeight) / 2;
    const y = carta.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scroll({top: y, behavior: 'smooth'})
}, 12000);

setTimeout(() => {
    const body = document.querySelector("body")
    body.style.overflow = "auto"
    alert("pode voltar pra o topo se quiser")
    const btn = document.getElementById("btn");
    const btnCome = document.getElementById("comeBack")
    btn.classList.add("showBtn")
    btnCome.classList.add("showBtn")
    btn.addEventListener("click", ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    })
}, 30000);

document.querySelector("#comeBack").addEventListener("click", ()=>{
    window.location = "index.html";
})
