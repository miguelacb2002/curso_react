import React from 'react';
import {createBrowserRouter} from 'react-router-dom';

/* importar las vistas */
import HomeScreen from './pages/home'
import LoginScreen from './pages/login'
import PedidosScreen from './pages/pedidos'
import ProductosScreen from './pages/productos'
import CategoriasScreen from './pages/categorias'
import ClientesScreen from './pages/clientes';
import CategoriasClaseScreen from './pages/categorias/categorias-clase';
import ClientesInsertScreen from './pages/clientesInsertar';
/* importar layouts */
import MainLayout from './layout/MainLayout';

  const router = createBrowserRouter([
    {path: '/login',
      element: <LoginScreen/>
    },
    {
      path:'/',
      element: <MainLayout/>,
      children: [
        {path: 'dashboard', element: <HomeScreen/>},
        {path: 'categorias', element: <CategoriasScreen/>},
        {path: 'categorias.legacy', element: <CategoriasClaseScreen/>},
        {path: 'pedidos', element: <PedidosScreen/>},
        {path: 'productos', element: <ProductosScreen/>},
        {path: 'clientes', element: <ClientesScreen/>} ,
        {path: 'clientes.insertar', element: <ClientesInsertScreen/>}    
      ]
    }

  ])


export default router;
