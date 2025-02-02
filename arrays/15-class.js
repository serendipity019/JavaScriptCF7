class ProductAlreadyExistsError extends Error {
    constructor(message) {
        super(message);
        this.code = "ProductExist";
    }
}

class ProductNoFoundError extends Error {
    constructor(message) {
        super(message);
        this.code = "ProductNotFound";
    }
}

try {
    throw new ProductNoFoundError("Product not found");
} catch (error) {
    if (error instanceof ProductNoFoundError) {
        console.error("Product not exists.\n" + error.message, error.code);
    } else if(error instanceof ProductAlreadyExistsError) {
        console.error("Product already exists.\n" + error.message, error.code);
    }
}