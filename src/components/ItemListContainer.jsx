import { useState, useEffect } from "react";
import { getProducts } from "../mock/mockData";
import ItemList from "./ItemList"; 

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []); 

    return (
        <div className="container">
            <h2>{greeting}</h2>
            {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;