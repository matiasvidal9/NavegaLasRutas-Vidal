import Item from "./Item";

// Cambiamos "productos" por "products" para que coincida con el Container
const ItemList = ({ products }) => { 
    return (
        <div className="item-list" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Verificamos que products exista antes de mapear para evitar errores */}
            {products && products.map(prod => (
                <Item key={prod.id} {...prod} /> 
            ))}
        </div>
    );
};

export default ItemList;