import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../service/firebase"; 
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const productsRef = collection(db, "products");
        
        const q = categoryId 
            ? query(productsRef, where("category", "==", categoryId))
            : productsRef;

        getDocs(q)
            .then((snapshot) => {
                console.log("Documentos encontrados:", snapshot.size);
                const productsAdapted = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(productsAdapted);
            })
            .catch(error => console.error("Error al obtener productos:", error));
    }, [categoryId]);

    return <ItemList products={products} />;
};

export default ItemListContainer;