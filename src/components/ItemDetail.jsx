import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import "../css/ItemDetail.css";

const ItemDetail = ({ item }) => {
    // IMPORTANTE: Si item no existe todavía, no renderizamos nada para evitar el error
    if (!item) return null;

    const onAdd = (quantity) => {
        console.log(`Agregado al carrito: ${quantity} unidades de ${item.name}`);
    };

    return (
        <article className="CardItem" style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
            <header className="Header">
                <h2 className="ItemHeader">{item.name}</h2>
            </header>
            <picture>
                <img src={item.img} alt={item.name} className="ItemImg" style={{ width: '200px' }} />
            </picture>
            <section>
                <p className="Info">Categoría: {item.category}</p>
                <p className="Info">Descripción: {item.description}</p>
                <p className="Info">Precio: ${item.price}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </footer>
        </article>
    );
};

export default ItemDetail;