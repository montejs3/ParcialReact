import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carro from "./Carro";

function Carros(){
    const [carros, setCarros] = useState([]);
    
    useEffect(() => {
        const URL ="https://raw.githubusercontent.com/montejs3/ParcialReact/main/datos.json";
        fetch(URL).then(data => data.json()).then(data =>{
            setCarros(data);
        }); 
    }, []);

    return(
        <div className="container">
           <h2 className="mt-2"><FormattedMessage id='listadoCarros'/></h2>
            <hr></hr>
            <Row>
                {carros.map(carro =>(
                <Col>
                <Carro carro={carro} /> 
                </Col>) )
                }

            </Row>
        </div>
                
    )
}

export default Carros;