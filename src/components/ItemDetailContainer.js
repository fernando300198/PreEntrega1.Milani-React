import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);

      const mockItems = [
        { id: "1", name: "Camiseta", description: "Camiseta 100% algodón", category: "ropa", image: `${process.env.PUBLIC_URL}/images/camiseta.jpg` },
        { id: "2", name: "Auriculares", description: "Auriculares inalámbricos", category: "electronica", image: `${process.env.PUBLIC_URL}/images/auriculares.jpg` },
        { id: "3", name: "Mochila", description: "Mochila resistente al agua", category: "accesorios", image: `${process.env.PUBLIC_URL}/images/mochila.jpg` },
        { id: "4", name: "Pantalón", description: "Pantalón de jean azul", category: "ropa", image: `${process.env.PUBLIC_URL}/images/pantalon.jpg` },
        { id: "5", name: "Teclado", description: "Teclado mecánico RGB", category: "electronica", image: `${process.env.PUBLIC_URL}/images/teclado.jpg` }
      ];

      const selectedItem = mockItems.find((prod) => prod.id === itemId);

      setItem(selectedItem || null);
      setLoading(false);
    };

    fetchItem();
  }, [itemId]);

  return (
    <div className="container mt-4 text-center">
      {loading ? (
        <p>Cargando producto...</p>
      ) : item ? (
        <div className="card shadow-sm p-4">
          <h2 className="mb-3">{item.name}</h2>
          <img 
            src={item.image} 
            alt={item.name} 
            className="img-fluid rounded mb-3" 
            style={{ 
              width: "100%",  
              maxWidth: "300px", 
              height: "auto",  
              objectFit: "contain",
              display: "block",
              margin: "0 auto"
            }} 
          />
          <p><strong>Descripción:</strong> {item.description}</p>
          <p><strong>Categoría:</strong> {item.category}</p>
          <button className="btn btn-primary mt-3">Añadir al carrito</button>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
