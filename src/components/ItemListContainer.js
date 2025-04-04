import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);

      const allItems = [
        { id: "1", category: "ropa", name: "Camiseta", image: "/images/camiseta.jpg" },
        { id: "2", category: "electronica", name: "Auriculares", image: "/images/auriculares.jpg" },
        { id: "3", category: "accesorios", name: "Mochila", image: "/images/mochila.jpg" },
        { id: "4", category: "ropa", name: "Pantalón", image: "/images/pantalon.jpg" },
        { id: "5", category: "electronica", name: "Teclado", image: "/images/teclado.jpg" }
      ];

      const filteredItems = categoryId
        ? allItems.filter(item => item.category === categoryId)
        : allItems;

      setItems(filteredItems);
      setLoading(false);
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2 className="text-center">{greeting}</h2>

      {loading ? (
        <p>Cargando productos...</p>
      ) : items.length > 0 ? (
        <div className="row">
          {items.map(item => (
            <div key={item.id} className="col-md-4">
              <div className="card shadow-sm p-3 mb-3">
                <Link to={`/item/${item.id}`} className="text-decoration-none text-dark">
                  <img src={item.image} alt={item.name} className="card-img-top img-fluid" />
                  <div className="card-body text-center">
                    <h5>{item.name}</h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
