/////////Responsove navigation/////////
function checkScreenWidth() {
    if (window.innerWidth <= 720) {
        document.getElementById('navigation').style.display = 'none';
        document.getElementById('responsive-navigation').style.display = 'flex';
    } else {
        document.getElementById('navigation').style.display = 'flex';
        document.getElementById('responsive-navigation').style.display = 'none';
    }
}

window.addEventListener('resize', checkScreenWidth);
window.addEventListener('load', checkScreenWidth);
//////Carousel///////
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatic slide change
setInterval(() => {
    nextSlide();
}, 10000);


///////////Slideshow/////////
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slideshow input[type="radio"]');
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].checked = false;
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].checked = true;
    }

    setInterval(showNextSlide, 4000);
});


//////////////Projects////////////////
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let slider = document.querySelector(".slider");

next.addEventListener('click', function () {
    let slides = document.querySelectorAll(".slides");
    slider.appendChild(slides[0]);
})
previous.addEventListener('click', function () {
    let slides = document.querySelectorAll(".slides");
    slider.prepend(slides[slides.length - 1]);
})


///////////////Footer Email//////////////
document.getElementById('submit-button').addEventListener('click', function (event) {
    event.preventDefault();

    var email = document.getElementById('user-email').value;
    var comment = document.getElementById('user-comment').value;

    if (email && comment) {
        var templateParams = {
            email: email,
            comment: comment
        };

        emailjs.send('service_di1f1od', 'template_bc01blo', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
            }, function (error) {
                console.log('FAILED...', error);
                alert('Failed to send email. Please try again.');
            });
    } else {
        alert('Please fill out both fields.');
    }
});


////////////////Footer Button////////////////
let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    let text = button.textContent;
    button.innerHTML = '';

    for (let char of text) {
        let span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        button.appendChild(span);
    }

    let spans = button.querySelectorAll('span');
    button.addEventListener('mouseenter', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('hover');
            }, index * 50);
        })
    })

    button.addEventListener('mouseleave', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('hover');
            }, index * 50);
        })
    })
})

