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

    const priceSlider = new Swiper('.price-table', {
        loop: false,
        pagination: {
            el: '.price-table__pagination',
        },
        navigation: {
            nextEl: '.price-table__arrow--next',
            prevEl: '.price-table__arrow--prev',
            clickable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            350: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            576: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            670: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            769: {
                slidesPerView: 5,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            860: {
                slidesPerView: 7,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
        }
    });

    const brandsSlider = new Swiper('.brands-slider', {
        loop: false,
        pagination: {
            el: '.brands-slider__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.brands-slider__arrow--next',
            prevEl: '.brands-slider__arrow--prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 10,
                grid: {
                    rows: 4,
                    fill: "row"
                },
            },
            450: {
                slidesPerView: 3,
                spaceBetween: 10,
                grid: {
                    rows: 4,
                    fill: "row"
                },
            },
            769: {
                slidesPerView: 5,
                spaceBetween: 15,
                grid: {
                    rows: 4,
                    fill: "row"
                },
            },
        }
    });

    let priceButton = document.querySelector('.price__button');
    if (priceButton) {
        let priceRows = document.querySelectorAll('.price__row--hidden');
        if (priceRows) {
            priceButton.addEventListener('click', () => {
                priceRows.forEach(priceRow => {
                    priceRow.classList.remove(('price__row--hidden'));
                })
                priceButton.classList.add('active')
            });
        }
    }
});
