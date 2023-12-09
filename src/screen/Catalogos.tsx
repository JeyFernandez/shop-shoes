import React, { useState, useEffect } from 'react';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

const Catalogo: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  useEffect(() => {
    const productosData: Producto[] = [
      {
        id: 1,
        nombre: 'Zapatillas Deportivas Nike Air Max',
        descripcion: 'Zapatillas de running con tecnología Air Max para mayor comodidad.',
        precio: 120.99,
        imagen: 'https://nikeclprod.vtexassets.com/arquivos/ids/625114/DX0116_101_A_PREM.jpg?v=638036905710970000',
      },
      {
        id: 2,
        nombre: 'Botas de Cuero Timberland Premium',
        descripcion: 'Botas de cuero impermeables y resistentes para todas las estaciones.',
        precio: 189.99,
        imagen: 'https://www.escapeshoes.com/wp-content/uploads/2018/05/41209-Botas-TIMBERLAND-10061-6-Inch-Premium-Waterproof.jpg',
      },
    ];

    setProductos(productosData);
  }, []);

  const mostrarDetalles = (producto: Producto) => {
    setProductoSeleccionado(producto);
  };

  const cerrarDetalles = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div>
      <h2>Catálogo de Zapatos</h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {productos.map((producto) => (
          <li
            key={producto.id}
            onClick={() => mostrarDetalles(producto)}
            style={{
              cursor: 'pointer',
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{ maxWidth: '100%', maxHeight: '150px', marginBottom: '10px' }}
            />
            <div>
              <h3>{producto.nombre}</h3>
              <p>${producto.precio.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>

      {productoSeleccionado && (
        <div>
          <h3>Detalles del Producto</h3>
          <img
            src={productoSeleccionado.imagen}
            alt={productoSeleccionado.nombre}
            style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px' }}
          />
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
