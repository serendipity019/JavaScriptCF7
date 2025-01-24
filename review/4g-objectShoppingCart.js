const shoppingCart = {
    items: [
        {productName: 'Apples', price: 8.59, quantity: 40},
        {productName: 'Oranges', price: 12, quantity: 25}
    ],

    addItemToCart(item) {
        this.items.push(item);// This function push put something inside
    }
};

shoppingCart.addItemToCart({productName: 'Honey', price: 18.59, quantity: 10});
console.log(shoppingCart["items"]);