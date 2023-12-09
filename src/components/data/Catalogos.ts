export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

export const productosData: Producto[] = [
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
