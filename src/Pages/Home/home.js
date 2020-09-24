import React from 'react';


function Home () {

  return ( 

<div>

    <h1 className="titulo"> Projeto Vinhos Velasquez </h1>
    
    <span>
      Lista de exercicios:
    </span>

<p>Velasquez possui uma loja de vinhos e, ao longo dos anos, guardou dados de
seus clientes e um histórico de compras. Velasquez quer personalizar o
atendimento e contratou você para desenvolver um software que:</p>
<br />
<br />
<p># 1 - Liste os clientes ordenados pelo maior valor total em compras.</p>
<br />
<p># 2 - Mostre o cliente com maior compra única no último ano (2016).</p>
<br />
<p># 3 - Liste os clientes mais fiéis.</p>
<br />
<p># 4 - Recomende um vinho para um determinado cliente a partir do histórico de compras.</p>
<br />
<br />
<p>As rotas de acesso ao backend estão disponíveis em https://vendavinhos-backend.herokuapp.com/ sendo elas:</p>
<br />
<p>GET "/clients" - lista todos os clientes;</p>
<br />
<p>GET "/clientsOrderedByPurchase" - lista os clientes ordenados pelo maior valor total em compras;</p>
<br />
<p>GET "/bestClient" - mostra o cliente com maior com em 2016;</p>
<br />
<p>GET "/bestClients” - lista os clientes mais fiéis;</p>
<br />
<p>GET "/recommendWine/:client" - recomenda um vinho baseado no cpf do cliente.</p>

</div>

  );
}

export default Home;
