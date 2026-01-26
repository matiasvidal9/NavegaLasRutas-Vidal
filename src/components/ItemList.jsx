import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <div className="item-list" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {products.map(prod => (
                <Item key={prod.id} {...prod} /> 
            ))}
        </div>
    );
};

export default ItemList;