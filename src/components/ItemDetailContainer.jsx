import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../service/firebase";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const docRef = doc(db, "productos", itemId);

        getDoc(docRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                }
            })
            .catch(error => console.error("Error al obtener producto:", error));
    }, [itemId]);

    return <ItemDetail {...product} />;
};

export default ItemDetailContainer;