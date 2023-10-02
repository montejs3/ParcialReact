# ParcialReact
## Ejecución parcial
Para poder correr el parcial primero se debe instalar las librerías necesarias. En este caso con correr 'npm install' y luego 'npm start' con eso es suficiente para correr el parcial
## Librerías
Las librerías utilizadas para este este parcial, para la creación del parcial se usó 'npx create-react-app parcial 1', luego se usó 'react-bootstrap bootstra' este con el fin de hacer los estilos. Para la parte de enrutamiento se usó 'react-router-dom --save'. Y para la parte de internacionalización se usó 'i18n'.
## Desarrollo 
Para el desarrollo de la aplicación se decidió hacer una carpeta components, en donde están  todos lo componentes de la aplicación, en app.js se realizó toda la parte de enrutamiento. En los components tenemos Login.js en donde se encuentra el forms para el inicio de sesion, con sus respectivas validación y cuando se puede ingresar a la aplicación se imprime en consola un json que sería el post en caso de tener backend, y se hace un enrutamiento hacia el siguiente componente que es Carros.js. En Carros.js se hace un get de los datos del json suministrados, y a partir de estos datos se hace un listado en donde se crea el componente Carro.js. En ese componente Carro.js se le pasa por props los datos que debe de renderizar y se hace un link en el título para el detalle del Carro. En Carro Detail se realiza el detalle del carro seleccionado, y en donde dependiendo del rol la descripción se puede editar o no.

