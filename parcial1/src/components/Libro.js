
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Libro(props){
   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">

           <Card.Body>
               <Card.Title>
               <Link to={"/libros/" + props.libro.isbn}  > 
                {props.libro.title}
                </Link>
                </Card.Title>
               <Card.Text>
                   {props.libro.tiltle}
               </Card.Text>
           </Card.Body>
       </Card>
   );
}

export default Libro;