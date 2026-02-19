# LOOK - E-commerce de Indumentaria

Este proyecto es una **Single Page Application (SPA)** desarrollada con **React Js** para el curso de React de **Coderhouse**. La aplicación simula una tienda virtual de indumentaria masculina, permitiendo navegar por categorías, ver detalles de productos y gestionar un flujo de compra completo.

## 🚀 Características Principales

- **Catálogo Dinámico**: Listado de productos filtrable por categorías utilizando `react-router-dom`
- **Detalle de Producto**: Vista expandida con descripción, precio y stock sincronizado con el carrito
- **Carrito de Compras**: Gestión de estado global mediante **React Context API**, evitando duplicados y calculando totales en tiempo real
- **Base de Datos en Tiempo Real**: Integración con **Google Firebase/Firestore** para la persistencia de productos y almacenamiento de órdenes de compra
- **Checkout Form**: Formulario de validación de datos del comprador para generar una orden de compra con ID de seguimiento

## 🛠️ Tecnologías Utilizadas

- **React Js**: Biblioteca base para la interfaz de usuario
- **React Router Dom**: Para la navegación sin recarga de página (SPA)
- **Firebase / Firestore**: Como Backend as a Service (BaaS) para la base de datos
- **CSS3 / Flexbox**: Para el diseño responsive y estilado de componentes - todavia le faltan retoques a la web pero va a camina a que sea una web e-commerce completa

## 📂 Estructura del Proyecto

[cite_start]Siguiendo las buenas prácticas y patrones de diseño solicitados (Container & Presentation Patterns)

- `/src/components`: Componentes de presentación e interfaces.
- `/src/components/containers`: Componentes con lógica de fetching y estado (ItemListContainer, ItemDetailContainer)
- `/src/context`: Implementación del `CartContext`
- `/src/service`: Configuración de Firebase

