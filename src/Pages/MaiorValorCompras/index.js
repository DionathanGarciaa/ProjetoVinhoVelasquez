import React, {useState, useEffect} from 'react';
import api from '../../Services/Api/index';
import { Container, Titulo, Card, Span, CardImg, CardText} from './style';
import Avatar from '../../Assets/avatar2.svg'


function Desafio1() {
  const [clientes, setClientes] = useState([]); 
  
  useEffect(() => {
    api.get('/clientsOrderedByPurchase').then((response)=> {
      setClientes(response.data)
    })
  }, [])

  return ( 
    
    <Container>
    
    <Titulo> 
      Clientes com maior valor em compra.
     </Titulo>

        {clientes.map((item) => {
          return(

          <Card>  
          
          <CardImg>
          < img  src = { Avatar } /> 
          </CardImg>

          <CardText>
          <Span> Nome: {item.nome}</Span> 
          <Span> Cpf: {item.cpf}</Span> 
          <Span> Total Gasto: {item.valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Span> 
          </CardText>
          
          </Card>)

         
      })}
    
    </Container>
  
  );
}

export default Desafio1;
