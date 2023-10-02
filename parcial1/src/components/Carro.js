
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Carro(props){
   return(
       <Card style={{ width: '18rem', height: '18rem', borderRadius: '0'}}  className="card border-dark mb-3 ">

           <Card.Body  style={{textAlign: 'left'}}>
               <Card.Title>
               <Card.Img
                    style={{ borderRadius: '0' }}
                    src={props.carro.image}
                    alt={props.carro.description}
                />
               <Link to={"/carros/" + props.carro.carModel} style={{ color: 'black', fontSize: '2rem', textDecoration: 'none', textAlign: 'left'}} > 
                {props.carro.carModel}
                </Link>
                </Card.Title>
             
               <Card.Text> {props.carro.price} Euros - {props.carro.carYear}  </Card.Text>
            
           </Card.Body>
       </Card>
   );
}

export default Carro;