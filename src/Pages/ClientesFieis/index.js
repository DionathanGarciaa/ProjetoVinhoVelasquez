import React, {useState, useEffect} from 'react';
import api from '../../Services/Api/index';
import { Container, Titulo, Card, Span, CardImg, CardText} from './style';
import Avatar from '../../Assets/avatar2.svg'


function Desafio3() {
  const [clientes, setClientes] = useState([]); 
  
  useEffect(() => {
    api.get('/bestClients').then((response)=> {
      setClientes(response.data)
    })
  }, [])

  return ( 

    <Container>

        <Titulo>Nossos clientes fiéis:</Titulo>
  
        {clientes.map((item) => {
          return(
            
          <Card>

          <CardImg>
          < img  src = { Avatar } /> 
          </CardImg>

          <CardText>
          <Span> Nome: {item.nome} </Span> 
          <Span> Cpf: {item.cpf} </Span> 
          <Span>Total de Compras: {item.totalCompras} </Span>
          </CardText>


          </Card>)
        })}

    </Container>
 
  );
}

export default Desafio3;
