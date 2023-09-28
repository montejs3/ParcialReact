import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Libro from "./Libro";
import LibroDetail from "./LibroDetail";

function Libros(props){
    const location = useLocation();
    const [libros, setLibro] = useState([]);

    const renderrating = () => {
        console.log("entrando funcion")
        if ( props.usuario !== undefined) return (console.log(props.usuario), "Role: " +props.usuario.role);
        else return ("hola");
      };

      useEffect(() => {
        const URL ="https://my.api.mockaroo.com/books.json?key=57ab8190";
        fetch(URL).then(data => data.json()).then(data =>{
            setLibro(data);
        }); 
    }, []);

    return(
        <div className="container">
        <Row>
            <h1>Libros</h1>
            <h1>{renderrating()}</h1>
            <h2>datos</h2>
        </Row>

        <Row>
        <Col sm={8}>
           <h2 className="mt-2">Listado de mascotas</h2>
            <hr></hr>
            <Row>
                {libros.map(libro =>(
                <Col>
                <Libro libro={libro} libros={libros}/> 
                </Col>) )
                }

            </Row>
        </Col>

        <Col sm={4}>
                <h3>Detail</h3>
                <hr></hr>
                <h1>jjj</h1>
                <LibroDetail />

        </Col>

        </Row>
        </div>
                
    )

   
}

export default Libros;