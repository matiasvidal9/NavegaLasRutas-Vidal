import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { getProducts } from "../mock/mockData";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams(); 

    useEffect(() => {
        getProducts().then((response) => {
            if (id) {
                setProducts(response.filter(item => item.category === id));
            } else {
                setProducts(response);
            }
        });
    }, [id]); 

    return (
        <div className="container">
            <h2>{id ? `Categoría: ${id}` : greeting}</h2>
            <ItemList products={products} />
        </div>
    );
};
export default ItemListContainer;