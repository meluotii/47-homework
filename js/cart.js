let shoppingList = [];
function toggleCart() {
    // $('.triangle').fadeToggle(50);
    $('.block-cart').fadeToggle(400).css({ 'display': 'flex' });
}

const productListElement = $('.product-list');

function updateQuantity() {
    $('#cart').html(`Cart(${shoppingList.length})`);
}

function updateTotalPrice() {
    let total = 0;
    shoppingList.forEach(el => {
        total += el.price * el.quantity;
    })
    $('#total').text(`$${total.toFixed(2)}`);
}

function addProduct(id) {
    const product = products.find(el => el.id === id);
    const existItem = shoppingList.find(el => el.id === id);
    if (existItem) {
        existItem.quantity++;
    } else {
        shoppingList.push({
            id: product.id,
            description: product.description,
            image: product.image,
            price: product.price,
            quantity: 1
        });
    }
    updateCart();
    updateQuantity();
    updateTotalPrice();
    console.log(shoppingList);
}

function removeProduct(id) {
    shoppingList = shoppingList.filter(el => el.id !== id);
    updateCart();
    updateQuantity();
    updateTotalPrice();
}


function updateCart() {
    let result = '';
    shoppingList.forEach(product => {
        result += `<div class="product-list__item">`;
        result += `<div class="product-image"><img class="product-image__img" src="${product.image}" alt=""></div>`;
        result += `<div class="product-info">`;
        result += `<div class="product-info__price">&#36;${product.price}</div>`;
        result += `<div class="product-info__title">${product.description}</div>`;
        result += `<div class="qty">Qty: <span class="qty__figure">${product.quantity}</span></div>`;
        result += `</div>`;
        result += `<div class="product-delete" onclick="removeProduct(${product.id})"><i class="fas fa-times product-delete__icon"></i></div>`;
        result += `</div>`;
        result += `</div>`;
    })

    productListElement.html(result);
}
