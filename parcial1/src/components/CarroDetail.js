import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { FormattedMessage, useIntl } from "react-intl";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function CarroDetail(props){

    const params = useParams();
   
    const [carros, setCarro] = useState([]);

    useEffect(() => { 
        const URL ="https://raw.githubusercontent.com/montejs3/ParcialReact/main/datos.json";
        fetch(URL).then(data => data.json())
        .then(data =>{setCarro(data);
        }); 
    }, []);


   const especial = carros.find((carro) => carro.carModel === (params.carroId)) || {};

    return(
        <div>
        <h1><FormattedMessage id='detalleCarro'/></h1>
        <h3>Role: {props.usuario}</h3>
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
                <Row>
                    <Col>
                        <Card.Text style={{color:'red',textAlign:'left'}}> Card Maker:  </Card.Text>
                        <Card.Text style={{color:'red',textAlign:'left'}}> Card Model:  </Card.Text>
                        <Card.Text style={{color:'red',textAlign:'left'}}> Card Year: </Card.Text>
                        <Card.Text style={{color:'red',textAlign:'left'}} > Card Available:   </Card.Text>
                        <Card.Text style={{color:'red',textAlign:'left'}} > Card Price:  </Card.Text>
                        <Card.Text style={{color:'red',textAlign:'left'}}>  Description</Card.Text>
                    </Col>
                    <Col>
                        <Card.Text>  {especial.carMaker} </Card.Text>
                        <Card.Text>  {especial.carModel} </Card.Text>
                        <Card.Text> {especial.carYear} </Card.Text>
                        <Card.Text>  {especial.available ? "Yes" : "No"} </Card.Text>
                        <Card.Text>  {especial.price} </Card.Text>
                    
                    
                    </Col>
                </Row>
               
                <br></br>
                {(props.usuario ===1 ) && 
                <p>{especial.description} </p>
                }
                {(props.usuario ===0 ) &&
                <input  placeholder={especial.description} />
            }
               </Col>
               
               </Row>
           </Card.Body>
       </Card>
       </div>
 
        </div>
    )
}

export default CarroDetail;