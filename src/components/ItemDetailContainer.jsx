import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mock/mockData"; 
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        getProductById(id).then(res => setProduct(res));
    }, [id]);

    if (!product) return <p>Cargando producto...</p>;

    return (
        <div className="detail-container">
            <h1>{product.name}</h1>
            <img src={product.img} alt={product.name} style={{width: '300px'}} />
            <p>Precio: ${product.price}</p>
            <p>Stock disponible: {product.stock}</p>
        </div>
    );
};

export default ItemDetailContainer;