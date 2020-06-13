const testimonials = [{
    rating: 5,
    description: 'I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!',
    author: 'Mark J.',
    image: 'images/slider-testimonials/couple.jpg'
}, {
    rating: 5,
    description: 'I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!',
    author: 'Mark J.',
    image: 'images/slider-testimonials/fields.jpg'
}, {
    rating: 5,
    description: 'I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!',
    author: 'Mark J.',
    image: 'images/slider-testimonials/man-walking-dog.jpg'
}, {
    rating: 5,
    description: 'I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!',
    author: 'Mark J.',
    image: 'images/slider-testimonials/village.jpg'
}]

const feedbackSlider = $('.feedback');


class Testimonial {
    constructor(data) {
        this.rating = data.rating;
        this.description = data.description;
        this.author = data.author;
        this.image = data.image;
    }

    print() {
        let result = `<div class="feedback__item">`;

        result += `<div class="img-slides">`;
        result += `<div class="img-slides__slide"><img src="${this.image}" alt=""></div>`;
        result += `</div>`;

        result += `<div class="testimonial">`;
        result += `<div class="testimonial__rating">`;
        for (let i = 0; i < this.rating; i++) {
            result += `<svg class="star"><use xlink:href="#star"></use></svg>`
        }
        result += `</div>`;
        result += `<div class="testimonial__description">${this.description}</div>`;
        result += `<div class="testimonial__author"><svg class="line"><use xlink:href="#line"></use></svg>${this.author}</div>`;
        result += `</div>`;


        result += `</div>`;



        feedbackSlider.append(result);
    }
}


class TestimonialsList {
    constructor(data) {
        this.data = data;
    }

    print() {
        this.data.forEach(element => {
            const testimonial = new Testimonial(element);
            testimonial.print();
        })
    }
}

testimonialList = new TestimonialsList(testimonials);
testimonialList.print();


$(document).ready(function () {
    $('.feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3500,
        fade: true,
        nextArrow: '<svg class="btn-arrow btn-arrow-right testimonials"><use xlink:href="#arrow"></use></svg>',
        prevArrow: '<svg class="btn-arrow btn-arrow-left testimonials"><use xlink:href="#arrow"></use></svg>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    arrows: true,
                    slidesToShow: 1,

                }
            }, {
                breakpoint: 1035,
                settings: {
                    arrows: false,
                    slidesToShow: 1,

                }
            }
        ]
    });
});