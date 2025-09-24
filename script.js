    // === Menú hamburguesa ===
    const menuToggle = document.querySelector('.fas.fa-bars');
    const navContent = document.getElementById('content');

    menuToggle.addEventListener('click', () => {
        navContent.classList.toggle('active');
        navContent.classList.toggle('slide'); // animación extra
    });


    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img, .slider video');
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    let index = 0;

    function showSlide(i) {
        if(i < 0) index = slides.length - 1;
        else if(i >= slides.length) index = 0;
        else index = i;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => showSlide(index - 1));
    nextBtn.addEventListener('click', () => showSlide(index + 1));
