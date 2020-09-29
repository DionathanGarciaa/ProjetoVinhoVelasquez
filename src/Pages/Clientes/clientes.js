import React, {useState, useEffect} from 'react';
import api from '../../Services/Api/index';
import { Container, Titulo, Card, Span, CardImg, CardText} from './style';
import Avatar from '../../Assets/avatar2.svg'


function Clientes() {
  const [clientes, setClientes] = useState([]); 
  
  useEffect(() => {
    api.get('/clients').then((response)=> {
      setClientes(response.data)
    })
  }, [])

  return ( 

    <Container>

        <Titulo>Clientes:</Titulo>
  
        {clientes.map((item) => {
          return(
            
          <Card>

          <CardImg>
          < img  src = { Avatar } /> 
          </CardImg>

          <CardText>
          <Span> Nome: {item.nome} </Span> 
          <Span> Cpf: {item.cpf} </Span> 
          </CardText>


          </Card>)
        })}

    </Container>
 
  );
}

export default Clientes;
