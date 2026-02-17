const products = [
    { id: 1, name: "Buzo Oversize Negro", price: 25000, category: "men", stock: 10, img: "../public/men/Buzo1-men.png" },
    { id: 2, name: "Buzo Oversize Beige", price: 25000, category: "men", stock: 15, img: "../public/men/Buzo2-men.png" },
    { id: 3, name: "Buzo Oversize Azul", price: 25000, category: "men", stock: 5, img: "../public/men/Buzo3-men.png" },
    { id: 4, name: "Remera Oversize Beige", price: 45000, category: "men", stock: 5, img: "../public/men/Remera1-men.png" },
    { id: 5, name: "Remera Oversize Verde", price: 45000, category: "men", stock: 5, img: "../public/men/Remera2-men.png" },
    { id: 6, name: "Remera Oversize Negra", price: 45000, category: "men", stock: 5, img: "../public/men/Remera3-men.png" },
    { id: 7, name: "Jean Recto Negro Liso", price: 12000, category: "women", stock: 15, img: "../public/men/Jean1-men.png" },
    { id: 8, name:"Jean Recto Gris Gastado", price:15000, category:"women", stock:8, img:"../public/men/Jean2-men.png"},
    { id: 9, name:"Jean Recto Azul Claro", price:15000, category:"women", stock:8, img:"../public/men/Jean3-men.png"}
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500); 
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === parseInt(productId));
            resolve(product);
        }, 1000);
    });
};