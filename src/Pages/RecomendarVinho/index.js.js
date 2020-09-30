import React, {useState, useEffect} from 'react';
import api from '../../Services/Api/index';
import { Container, Titulo, Span, CardText, CardExterno, Card, P} from './style';


function Desafio4 () {
  const [clients, setClients] = useState([]); 
  const [wineRecommended, setWineRecommended] = useState(" ");
  const [client, setClient] = useState([]);


  useEffect(() => {
      api.get('/clients').then((response) => {
          setClients(response.data);
      });
  }, []);

const recommendWine = (cliente) => {
    api.get(`/recommendWine/${cliente}`).then((response) => {
        setWineRecommended(response.data);
    });
};

  return ( 
      
<Container>

    <Titulo>Recomendação de vinho</Titulo>

    <CardExterno>

            <Card>
              <Span> Produto: </Span> <P>{wineRecommended && wineRecommended.produto}</P>
                
              <Span>Variedade:</Span> <P>{wineRecommended && wineRecommended.variedade}</P>
          
              <Span>País:</Span> <P>{wineRecommended && wineRecommended.pais}</P>
            
              <Span>Categoria:</Span> <P>{wineRecommended && wineRecommended.categoria}</P>
            
              <Span> Safra: </Span> <P>{wineRecommended && wineRecommended.safra}</P>
            </Card>


        <CardText>
            <Span>Escolha um cliente:</Span>
        </CardText>

        <select
            onChange={(event) => {
            let cpf = event.target.value.replace(/-|\.|/gi, "");
            recommendWine(cpf);
         }}
        >
        <option></option>
        {clients.map((item) => (
            <option key={item.cpf} value={item.cpf}>
                {item.nome}
            </option>
        ))}
        </select>
   

    </CardExterno>


</Container>
 
  );
}

export default Desafio4;
