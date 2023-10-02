import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { FormattedMessage } from "react-intl";
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
            <Row> 
                
                <Col xs={6} className="mx-auto"> 
        <Card className="mb-3 "  >

     
            <Row >
               <Col >
               <Card.Img
                    height={'100%'}
                    src={especial.image}
                    alt={especial.description}
                />
               </Col>

               <Col >
                <Card.Title>
                    <h3>   {especial.carModel}</h3>
                </Card.Title>
                <hr></hr>
                <Row>
                    <Col>
                    <Row className="pb-1">
                        <Card.Text style={{color:'red',textAlign:'left'}}> <FormattedMessage id='cardmaker'/>  </Card.Text>
                    </Row>
                    <Row className="pb-1">
                        <Card.Text style={{color:'red',textAlign:'left'}}> <FormattedMessage id='cardmodel'/>  </Card.Text>
                    </Row>
                    <Row className="pb-1">
                        <Card.Text style={{color:'red',textAlign:'left'}}> <FormattedMessage id='cardyear'/>  </Card.Text>
                    </Row>
                    <Row className="pb-1">
                        <Card.Text style={{color:'red',textAlign:'left'}}> <FormattedMessage id='cardavailable'/>  </Card.Text>
                    </Row>
                    <Row className="pb-1">
                        <Card.Text style={{color:'red',textAlign:'left'}}> <FormattedMessage id='cardprice'/>  </Card.Text>
                    </Row>
                    <Row className="pb-1">
                        <Card.Text style={{color:'red',textAlign:'left'}}> <FormattedMessage id='carddescription'/>  </Card.Text>
                    </Row>
                    </Col>
                    <Col>
                    <Row className="pb-1">
                        <Card.Text style={{textAlign:'left'}}>  {especial.carMaker} </Card.Text>
                    </Row>
                    <Row className="pb-1">
                        <Card.Text style={{textAlign:'left'}}>  {especial.carModel} </Card.Text>
                    </Row>
                    <Row className="pb-1">
                        <Card.Text style={{textAlign:'left'}}>  {especial.carYear} </Card.Text>
                    </Row>
                    <Row className="pb-1">
                        <Card.Text style={{textAlign:'left'}}>  {especial.available ? "Yes" : "No"}  </Card.Text>
                    </Row>
                    <Row className="pb-1">
                        <Card.Text style={{textAlign:'left'}}>  {especial.price}  </Card.Text>
                    </Row>
                      
              
                        {(props.usuario ===1 ) && 
                <p style={{textAlign:'left'}}>{especial.description} </p>
                }
                {(props.usuario ===0 ) &&
                <input style={{textAlign:'left'}} value={especial.description} />
            }
                    
                    
                    </Col>
                </Row>
               
              
               
               </Col>
               
               </Row>
          
       </Card>
       </Col>
       </Row>
       </div>
 
        </div>
    )
}

export default CarroDetail;