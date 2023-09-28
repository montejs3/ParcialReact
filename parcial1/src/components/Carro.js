
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Carro(props){
   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">

           <Card.Body>
               <Card.Title>
               <Card.Img
                    style={{ height: "14rem" }}
                    variant="top"
                    src={props.carro.image}
                    alt={props.carro.description}
                />
               <Link to={"/carros/" + props.carro.carModel}  > 
                {props.carro.carModel}
                </Link>
                </Card.Title>
             
               <Card.Text> Euros: {props.carro.price} - {props.carro.carYear}  </Card.Text>
            
           </Card.Body>
       </Card>
   );
}

export default Carro;