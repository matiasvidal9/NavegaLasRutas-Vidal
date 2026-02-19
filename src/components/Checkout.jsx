import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../service/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirm: ''
    });

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (buyer.email !== buyer.emailConfirm) {
            alert("Los emails no coinciden");
            return;
        }

        setLoading(true);

        const order = {
            buyer: { 
                name: buyer.name, 
                phone: buyer.phone, 
                email: buyer.email 
            },
            items: cart.map(prod => ({
                id: prod.id,
                title: prod.name,
                price: prod.price,
                quantity: prod.quantity
            })),
            total: totalPrice(),
            date: serverTimestamp() 
        };

        try {
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id); 
            clearCart();
        } catch (error) {
            console.error("Error al generar la orden:", error);
            alert("Hubo un error al procesar su compra");
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>¡Gracias por tu compra!</h1>
                <p>Tu número de seguimiento es: <strong>{orderId}</strong></p>
                <Link to="/" className="btn-finish">Volver al inicio</Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>No tienes productos en el carrito</h1>
                <Link to="/" className="btn-finish">Ver catálogo</Link>
            </div>
        );
    }

    return (
        <div className="checkout-container" style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
            <h2>Datos de contacto</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input 
                    type="text" name="name" placeholder="Nombre y Apellido" 
                    onChange={handleInputChange} value={buyer.name} required 
                />
                <input 
                    type="tel" name="phone" placeholder="Teléfono de contacto" 
                    onChange={handleInputChange} value={buyer.phone} required 
                />
                <input 
                    type="email" name="email" placeholder="Tu email" 
                    onChange={handleInputChange} value={buyer.email} required 
                />
                <input 
                    type="email" name="emailConfirm" placeholder="Confirma tu email" 
                    onChange={handleInputChange} value={buyer.emailConfirm} required 
                />
                
                <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '10px' }}>
                    <h3>Total a pagar: ${totalPrice()}</h3>
                </div>
                
                <button type="submit" className="btn-finish" style={{ cursor: 'pointer' }} disabled={loading}>
                    {loading ? "Procesando..." : "Confirmar Compra"}
                </button>
            </form>
        </div>
    );
};

export default Checkout;