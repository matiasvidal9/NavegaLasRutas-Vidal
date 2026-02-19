const products = [
    {  name: "Buzo Oversize Negro", price: 25000, category: "Men", stock: 10, img: "../public/men/Buzo1-men.png" },
    {  name: "Buzo Oversize Beige", price: 25000, category: "Men", stock: 15, img: "../public/men/Buzo2-men.png" },
    {  name: "Buzo Oversize Azul", price: 25000, category: "Men", stock: 5, img: "../public/men/Buzo3-men.png" },
    {  name: "Remera Oversize Beige", price: 45000, category: "Men", stock: 5, img: "../public/men/Remera1-men.png" },
    {  name: "Remera Oversize Verde", price: 45000, category: "Men", stock: 5, img: "../public/men/Remera2-men.png" },
    {  name: "Remera Oversize Negra", price: 45000, category: "Men", stock: 5, img: "../public/men/Remera3-men.png" },
    {  name: "Jean Recto Negro Liso", price: 12000, category: "Women", stock: 15, img: "../public/men/Jean1-men.png" },
    {  name:"Jean Recto Gris Gastado", price: 15000, category: "Women", stock:8, img:"../public/men/Jean2-men.png"},
    {  name:"Jean Recto Azul Claro", price: 15000, category: "Women", stock:8, img:"../public/men/Jean3-men.png"}
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