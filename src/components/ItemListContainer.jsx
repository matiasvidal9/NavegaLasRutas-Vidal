import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");

        // Lógica de filtrado según la rúbrica (Uso de query y where)
        const q = categoryId 
            ? query(itemsCollection, where("category", "==", categoryId)) 
            : itemsCollection;

        getDocs(q)
            .then((snapshot) => {
                const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(docs);
            })
            .catch(error => console.error("Error Firestore:", error))
            .finally(() => setLoading(false));
    }, [categoryId]);

    if (loading) return <h2>Cargando productos...</h2>;

    return (
        <div className="container">
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;