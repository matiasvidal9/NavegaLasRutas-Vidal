const products = [
    { id: 1, name: "Buzo Oversize", price: 25000, category: "men", stock: 10, img: "../assets/men/Buzo1-men.png" },
    { id: 2, name: "Remera Oversize", price: 45000, category: "men", stock: 5, img: "../assets/men/Remera1-men.png" },
    { id: 3, name: "Jean Recto", price: 12000, category: "men", stock: 15, img: "../assets/men/Jean1-men.png" },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500); 
    });
};