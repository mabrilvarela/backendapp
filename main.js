class ProductManager {

    static lastId = 0;

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {

        if(!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }

        if(this.products.some(word => word.code === code)) {
            console.log("El código debe ser único");
            return;
        }

        const newProduct = {
            id: ++ProductManager.lastId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        this.products.push(newProduct)

    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(word => word.id === id);

        if(!product) {
            console.error("Not found");
        } else {
            console.log(product);
        }
    }
}