document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector('.hamburger');
    let mobile = document.querySelector('.mobile');
    burger.addEventListener('click', () => {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            mobile.classList.remove('active');
            document.body.style.overflow = "visible";
        } else {
            burger.classList.add('active');
            mobile.classList.add('active');
            document.body.style.overflow = "hidden";
        }
    });


    const problemsSlider = new Swiper('.problems-slider', {
        loop: false,
        pagination: {
            el: '.problems-slider__pagination',
        },
        navigation: {
            nextEl: '.problems-slider__arrow--next',
            prevEl: '.problems-slider__arrow--prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            576: {
                spaceBetween: 15,
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            769: {
                spaceBetween: 15,
                slidesPerView: 3,
                grid: {
                    rows: 3,
                    fill: "row"
                },
            },
            1024: {
                spaceBetween: 24,
                slidesPerView: 3,
                grid: {
                    rows: 3,
                    fill: "row"
                },
            },
        }
    });
});
