const products = [{
    id: 1,
    rating: 5,
    description: 'CBD 500 mg Orange Flavor Tincture',
    image: 'images/slider-products/bottle.png',
    price: 49.99,
}, {
    id: 2,
    rating: 5,
    description: 'Black ICE CBD Muscle Rub 200 mg',
    image: 'images/slider-products/tin-box.png',
    price: 49.99,
}, {
    id: 3,
    rating: 5,
    description: 'CBD+Curcumin Coffee 750 mg',
    image: 'images/slider-products/package.png',
    price: 79.99,
}, {
    id: 4,
    rating: 5,
    description: 'CBD Infused drink 15 mg Active CBD',
    image: 'images/slider-products/infused-drink.png',
    price: 29.99,
}, {
    id: 5,
    rating: 5,
    description: 'Premium CBD Mint Oildrops 300 mg',
    image: 'images/slider-products/mint-oil.png',
    price: 89.99,
}, {
    id: 6,
    rating: 5,
    description: 'Cheerful Buddha CBD Coffee 100 g',
    image: 'images/slider-products/coffee.png',
    price: 59.99,
}]

const blockSlider = $('.slider-products');

class Product {
    constructor(data) {
        this.id = data.id;
        this.rating = data.rating;
        this.description = data.description;
        this.image = data.image;
        this.price = data.price;
    }

    print() {
        let result = `<div class="slider-products__item">`;
        result += `<div class="block-main">`;
        result += `<div class="block-main__rating">`;
        for (let i = 0; i < this.rating; i++) {
            result += `<svg class="star"><use xlink:href="#star"></use></svg>`
        }
        result += `</div>`;
        result += `<div class="block-main__description">${this.description}</div>`;
        result += `<div class="block-main__image"><img src="${this.image}" alt="CBD"></div>`;
        result += `</div>`;
        result += `<div class="block-purchase">`;
        result += `<div class="block-purchase__price">&#36;${this.price} USD</div>`;
        result += `<button class="block-purchase__btn" onclick="addProduct(${this.id})"><span class="text">Shop</span><svg class="line"><use xlink:href="#line"></use></svg><i class="fas fa-shopping-cart"></i></button>`;
        result += `</div>`;
        result += `</div>`;

        blockSlider.append(result);
    }
}


class ProductsList {
    constructor(data) {
        this.data = data;
    }

    print() {
        this.data.forEach(element => {
            const product = new Product(element);
            product.print();
        })
    }
}

productList = new ProductsList(products);
productList.print();

$(document).ready(function () {
    $('.slider-products').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        nextArrow: '<svg class="btn-arrow btn-arrow-right"><use xlink:href="#arrow"></use></svg>',
        prevArrow: '<svg class="btn-arrow btn-arrow-left"><use xlink:href="#arrow"></use></svg>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    // arrows: true,
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 768,
                settings: {
                    // arrows: true,
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 680,
                settings: {
                    // arrows: true,
                    slidesToShow: 1,
                }
            }
        ]
    });
});



