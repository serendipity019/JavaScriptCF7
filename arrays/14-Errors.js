const products = [];

function insertP(arr, product) {
    if(!arr || !product) return;

    try {
        if (arr.includes(product)) {
            throw new Error("Product Exists");
        }
        products.push(product);
    } catch (error) {
        console.error(error.message, error.trace);
        throw error;
    }
}


//The main will be like below
try {
    insertP(products, "Apples");
    console.log(products);
    insertP(products, "Apples");
} catch (error) {
    console.log(error.message);
}
