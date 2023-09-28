import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function LibroDetail(props){
    const params = useParams();
    console.log(params.libroId)
    const [libros, setLibro] = useState([]);

   
   console.log(libros)
   const especial = libros.find((libro) => libro.isbn === (params.libroId)) || {};

    return(
        <div>
        <h1>Detalle de la mascota</h1>
        <p>Id de libro: {params.libroId}</p>
        <p>Nombre del libro: {especial.title}</p>
        </div>
    )
}

export default LibroDetail;