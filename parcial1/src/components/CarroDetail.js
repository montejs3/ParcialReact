import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function CarroDetail(props){

    const params = useParams();
    console.log(params.carroId)
    const [carros, setCarro] = useState([]);

    useEffect(() => { 
        const URL ="https://raw.githubusercontent.com/montejs3/ParcialReact/main/datos.json";
        fetch(URL).then(data => data.json())
        .then(data =>{setCarro(data);
        }); 
    }, []);

   console.log(carros)
   console.log(params.mascotaId)
   const especial = carros.find((carro) => carro.carModel === (params.carroId)) || {};

    return(
        <div>
        <h1>Detalle de carro</h1>
        <hr></hr>
        <div className="align-self">
        <Card style={{ width: '45rem', height: '30rem' }} className="mb-3" >

           <Card.Body>
            <Row>
               <Col>
               <Card.Img
                    style={{ height: "14rem" }}
                    variant="top"
                    src={especial.image}
                    alt={especial.description}
                />
               </Col>

               <Col>
                <Card.Title>
                    <h1>   {especial.carModel}</h1>
                </Card.Title>
                <hr></hr>
                <Card.Text> Card Maker: {especial.carMaker} </Card.Text>
                <Card.Text> Card Model: {especial.carModel} </Card.Text>
                <Card.Text> Card Year: {especial.carYear} </Card.Text>
                <Card.Text> Card Available Online:  {especial.available} </Card.Text>
                <Card.Text> Card Price: {especial.price} </Card.Text>
                <Card.Text> Card Description</Card.Text>
                <p>{especial.description} </p>
               </Col>
               
               </Row>
           </Card.Body>
       </Card>
       </div>
 
        </div>
    )
}

export default CarroDetail;