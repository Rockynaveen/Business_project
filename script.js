const testimonials = [
    {
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8MnwwfHx8MA%3D%3D",
        text: "I can't recommend this place enough. It's perfect for special occasions and memorable experiences.",
        name: "William Henry",
        role: "Designer at Vertex Agency"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1661521353816-9e8e1c0c9681?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Outstanding service and incredible attention to detail. Everything was beyond expectations.",
        name: "Sophia Anderson",
        role: "Marketing Manager"
    },
    {
        image: "https://images.unsplash.com/photo-1724124419963-4ba797267047?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Professional team and exceptional results. I would definitely work with them again.",
        name: "James Carter",
        role: "CEO at Bright Solutions"
    }
];

let currentIndex = 0;

// Update slide content
function updateSlide() {
    document.getElementById("clientImage").src = testimonials[currentIndex].image;
    document.getElementById("testimonialText").innerText = testimonials[currentIndex].text;
    document.getElementById("clientName").innerText = testimonials[currentIndex].name;
    document.getElementById("clientRole").innerText = testimonials[currentIndex].role;

    const displayIndex = currentIndex + 1;
    const total = testimonials.length < 10 ? "0" + testimonials.length : testimonials.length;
    document.getElementById("counter").innerText =
        (displayIndex < 10 ? "0" + displayIndex : displayIndex) + " / " + total;
}

// Next and previous buttons
document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSlide();
});

// Optional: auto-slide every 5 seconds
// setInterval(() => { currentIndex = (currentIndex + 1) % testimonials.length; updateSlide(); }, 5000);

// Initialize first slide
updateSlide();


function moveSlide(index) {
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.dot');

    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}
const carousel = document.querySelector('#projectCarousel');
const indicators = document.querySelectorAll('.carousel-indicators-custom button');

carousel.addEventListener('slide.bs.carousel', function (event) {
    indicators.forEach((btn) => btn.classList.remove('active'));
    indicators[event.to].classList.add('active');
});

var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    }

});