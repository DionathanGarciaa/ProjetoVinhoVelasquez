import React from 'react';
import { Container, Titulo, Span, Card, Card1 } from './style';

function Home() {
  return ( 


<Container>

    <Titulo>Projeto Vinhos Velasquez </Titulo>

<Card>

    <Span>
      Lista de exercicios:
    </Span>


  Velasquez possui uma loja de vinhos e, ao longo dos anos, guardou dados de
seus clientes e um histórico de compras. Velasquez quer personalizar o
atendimento e contratou você para desenvolver um software que:

<Card1>
# 1 - Liste os clientes ordenados pelo maior valor total em compras.
<br />
<br />
# 2 - Mostre o cliente com maior compra única no último ano (2016).
<br />
<br />
# 3 - Liste os clientes mais fiéis.
<br />
<br />
# 4 - Recomende um vinho para um determinado cliente a partir do histórico de compras.
</Card1>

<Card1>
As rotas de acesso ao backend estão disponíveis em https://vendavinhos-backend.herokuapp.com/ sendo elas:
<br />
<br />
GET "/clients" - lista todos os clientes;
<br />
<br />
GET "/clientsOrderedByPurchase" - lista os clientes ordenados pelo maior valor total em compras;
<br />
<br />
GET "/bestClient" - mostra o cliente com maior com em 2016;
<br />
<br />
GET "/bestClients” - lista os clientes mais fiéis;
<br />
<br />
GET "/recommendWine/:client" - recomenda um vinho baseado no cpf do cliente;
<br />
<br />
</Card1>

</Card>

</Container>

  );
}

export default Home;
