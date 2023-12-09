import React, { useState } from 'react';
import styles from '../styles/Catalogos.module.css';
import { Producto, productosData } from '../data/Catalogos';

const Catalogo: React.FC = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  const mostrarDetalles = (producto: Producto) => {
    setProductoSeleccionado(producto);
  };

  const cerrarDetalles = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div className={styles.catalogoContainer}>
      <h2>Catálogo de Zapatos</h2>
      <ul className={styles.productoList}>
        {productosData.map((producto) => (
          <li key={producto.id} onClick={() => mostrarDetalles(producto)} className={styles.productoItem}>
            <img src={producto.imagen} alt={producto.nombre} className={styles.productoImg} />
            <div>
              <h3>{producto.nombre}</h3>
              <p>${producto.precio.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>

      {productoSeleccionado && (
        <div className={styles.detalleContainer}>
          <h3>Detalles del Producto</h3>
          <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} className={styles.productoImg} />
          <p>{productoSeleccionado.nombre}</p>
          <p>{productoSeleccionado.descripcion}</p>
          <p>Precio: ${productoSeleccionado.precio.toFixed(2)}</p>
          <button onClick={cerrarDetalles}>Cerrar Detalles</button>
        </div>
      )}
    </div>
  );
};

export default Catalogo;
