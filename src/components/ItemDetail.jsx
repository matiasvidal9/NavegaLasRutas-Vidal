import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";

const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        setGoToCart(true);
        addItem(item, quantity);
    };

    if (!item) return null;

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{item.name}</h2>
            </header>
            <picture>
                <img src={item.img} alt={item.name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Categoría: {item.category}</p>
                <p className="Info">Descripción: {item.description}</p>
                <p className="Info">Precio: ${item.price}</p>
            </section>
            <footer className="ItemFooter">
                {
                    goToCart 
                        ? <Link to='/cart' className="Option">Terminar mi compra</Link>
                        : <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                }
            </footer>
        </article>
    );
};

export default ItemDetail;