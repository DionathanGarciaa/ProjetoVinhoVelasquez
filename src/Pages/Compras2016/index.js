import React, {useState, useEffect} from 'react';
import api from '../../Services/Api/index';
import { Container, Titulo, Card, Span} from './style';


function Desafio2() {
  const [bestClient, setBestClient] = useState({
    nome: "0",
    valorTotal: "",
  }); 
  
  useEffect(() => {
    api.get('/bestClient').then((response)=> {
      setBestClient(response.data)
    })
  }, [])

  return (

  <Container>
    
    <Titulo> 
      O prêmio de melhor cliente em 2016 vai para:
    </Titulo>

          <Card>  
      
          <Span> Nome: {bestClient.nome}</Span> 
          <Span> Total Gasto: {bestClient.valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Span> 
      
          </Card>

    </Container>
);
    }

export default Desafio2;
