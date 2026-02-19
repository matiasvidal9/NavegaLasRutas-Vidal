import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../service/firebase"; 
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import "../css/ItemListContainer.css";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        
        const itemsCollection = collection(db, "productos");

        const q = categoryId 
            ? query(itemsCollection, where("category", "==", categoryId)) 
            : itemsCollection;

        getDocs(q)
            .then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log("No se encontraron resultados");
                }
                const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(docs);
            })
            .catch(error => {
                console.error("Error al obtener productos de Firestore:", error);
            })
            .finally(() => setLoading(false));
            
    }, [categoryId]);

    if (loading) return <h2 className="Loading">Cargando productos...</h2>;

    return (
        <main className="container">
            <h2 className="CategoryTitle">
                {categoryId ? `Categoría: ${categoryId}` : "Nuestro Catálogo"}
            </h2>
            <ItemList products={products} />
        </main>
    );
};

export default ItemListContainer;