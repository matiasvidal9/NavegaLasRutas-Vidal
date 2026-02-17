import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img, category }) => {
    return (
        <article className="item-card" style={cardStyle}>
            <header>
                <h3 className="item-title">{name}</h3>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
            </picture>
            <section>
                <p className="item-category">
                    Categoría: <span>{category}</span>
                </p>
                <p className="item-price">
                    ${price}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className="option-button">
                    Ver detalle
                </Link>
            </footer>
        </article>
    );
};

const cardStyle = {
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '10px',
    width: '250px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

export default Item;