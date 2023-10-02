import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";

function Loginp(props){
  const navigate = useNavigate();
  const[logins, setLogins] = useState(true);
  const [formValues, setFormValues] = useState({email:"", password:"",role:true})
  const [validationStates, setValidationStates] = useState({emailState:true, passwordState:true})


  function getRandomBinary() {
    const randomNum = Math.random();
    const binaryValue = randomNum < 0.5 ? 0 : 1;
    return binaryValue;
  }

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });

  const handlePasswordChange = ((e) => {
  setFormValues({...formValues, password: e.target.value})
  if (e.target.value.length < 6 ) {
    setValidationStates({...validationStates, passwordState:false})
  }else{
    setValidationStates({...validationStates, passwordState:true})
  }
  });

  const clickContinuar = (() => {
    if (formValues.email.includes("@")) {
        setValidationStates({ ...validationStates, emailState: true });
        setLogins(false);
        }
    else if (!formValues.email.includes("@")) {
        setValidationStates({ ...validationStates, emailState: false });
        }
    })

  const clickSubmit = (() => {
    if (formValues.email.includes("@") && validationStates.passwordState) {
      setValidationStates({ ...validationStates, emailState: true });
      handlePost(); 
    } else if (!formValues.email.includes("@")) {
      setValidationStates({ ...validationStates, emailState: false });
    } else if (!validationStates.passwordState) {
      setValidationStates({ ...validationStates, passwordState: false });
    }
    })

    const exampleJSON = { email: formValues.email, password: formValues.password}
    async function handlePost() {
      console.log("Envio de Post")
      console.log(JSON.stringify(exampleJSON))
      //const response = await fetch("https://my.api.mockaroo.com/login.json?key=57ab8190&__method=POST", { method: "POST", body: JSON.stringify(exampleJSON), headers: {"X-Requested-With": "XMLHttpRequest"} })
      //const dataa = await response.json()
      //setDataPOST(JSON.stringify(dataa))
      //props.setUsuario(dataa)
      const randomRole = getRandomBinary();
      console.log(randomRole)
      props.setUsuario(randomRole);
      alert(JSON.stringify(exampleJSON)+ " Role:" + randomRole)
      navigate("/carros" )
    };

    const intl = useIntl();
    const placeholderEmail = intl.formatMessage({ id: 'Correo' });
    const placeholderPassword = intl.formatMessage({ id: 'Contraseña' });

    return(
        <Container>
    <Row>
        {(logins ) && 
            <Form className="mx-auto" style={{ border: '1px solid ', borderRadius:"10px", width: '45%'}}>
                <Form.Group className='mb-6' controlId='formBasicEmail'>
                    <div className="p-4"> 
                      <h3><FormattedMessage id='Acceder'/></h3>
                      <h4><FormattedMessage id='cuenta'/></h4>
                    </div>
                    <Form.Control type='email' placeholder={placeholderEmail} onChange={handleEmailChange} value={formValues.email} className={!validationStates.emailState ? 'is-invalid' : ''}/>
                    {!validationStates.emailState &&  <Form.Text className='text-muted'><FormattedMessage id='emailInvalido'/></Form.Text>}
                    <br></br>
                    <h6 className="text-primary m-1" style={{color: 'blue', textAlign: 'left'}}><FormattedMessage id='OlvidasteCorreo'/></h6>
                            
                 </Form.Group>
                 <Row className="p-4 ">
                    <Col>
                      <h6 className="text-primary"><FormattedMessage id='Crear_Cuenta'/></h6>
                    </Col>

                    <Col>
                      <Button  onClick={clickContinuar} >
                        <FormattedMessage id='Siguiente'/>
                      </Button>
                    </Col>
                 </Row>
                  
            </Form>
        }
        {(!logins ) &&      
            <Form  className="mx-auto" style={{ border: '1px solid ', borderRadius:"10px", width: '45%'}}> 

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                  <div className="p-3">
                    <h3> {formValues.email}</h3>
                    <Form.Label><FormattedMessage id='Contra'/></Form.Label>
                  </div>
                    <Form.Control  type="password" placeholder={placeholderPassword} onChange={handlePasswordChange} value={formValues.password} className={!validationStates.passwordState ? 'is-invalid' : ''}/>
                    { !validationStates.passwordState && <Form.Text className="text-muted"><FormattedMessage id='ContraseñaInvalida'/></Form.Text>} 
                </Form.Group>

                <div className="p-2">
                <Button  onClick={clickSubmit}   >
                  <FormattedMessage id='Siguiente'/>
                </Button>
                </div>

            </Form>
        } 
    </Row>
    </Container>
    );
}
export default Loginp;