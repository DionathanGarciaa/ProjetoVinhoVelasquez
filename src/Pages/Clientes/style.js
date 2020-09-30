import styled from 'styled-components';



export const Container = styled.div`

height: 660px;
width: 100%;
display: flex;
flex-wrap: wrap;
overflow: scroll;
padding-bottom: 20px;

::-webkit-scrollbar {
    width: 15px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #f7df1e;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #f7df1e;
    border-radius: 5px;
  }
`;

export const Titulo = styled.div`

width: 100%;
font-family: Arial, Helvetica, sans-serif;
font-size: 50px;
padding: 30px 350px 10px 50px;
`;

export const Span = styled.div`

display:flex;
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
font-weight:bold;
`;

export const Card = styled.div`

display:flex;
align-items: center;
width: 35%;
padding: 5px;
margin: 25px 0 0 25px;
box-shadow: 0 0 10px 0px #f7df1e;
background-color #f1f1f1;
color: black;
`;

export const CardImg = styled.div`

display:flex;
`;

export const CardText = styled.div`

display: flex;
font-family: Arial, Helvetica, sans-serif;
`;
