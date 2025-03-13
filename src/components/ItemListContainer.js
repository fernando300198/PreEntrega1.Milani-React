import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);

      
      const allItems = [
        { id: "1", category: "ropa", name: "Camiseta" },
        { id: "2", category: "electronica", name: "Auriculares" },
        { id: "3", category: "accesorios", name: "Mochila" },
        { id: "4", category: "ropa", name: "Pantalón" },
        { id: "5", category: "electronica", name: "Teclado" }
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
      <h2>{greeting}</h2>

      {loading ? (
        <p>Cargando productos...</p>
      ) : items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
