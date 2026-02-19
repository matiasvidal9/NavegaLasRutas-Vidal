import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../service/firebase"; 
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true); 
    const { id } = useParams(); 

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "productos", id); 

        getDoc(docRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.error("No existe el producto");
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className="container"><h3>Cargando detalle...</h3></div>;

    if (!item) return <div className="container"><h3>Producto no encontrado</h3></div>;

    return (
        <div className="item-detail-container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;