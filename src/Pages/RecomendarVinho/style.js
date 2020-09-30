import styled from 'styled-components';



export const Container = styled.div`
width: 100%;
`;

export const Titulo = styled.div`
width: 100%;
font-family: Arial, Helvetica, sans-serif;
font-size: 50px;
padding: 30px 350px 10px 50px;
white-space: nowrap;
`;

export const Span = styled.div`
display:flex;
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
font-weight:bold;
padding: 10px;
color: #000;
white-space: nowrap;
`;

export const P = styled.div`
display:flex;
font-family: Arial, Helvetica, sans-serif;
font-size: 15px;
font-weight:bold;
padding: 2px 0 2px 30px;
color: #000;
`;

export const CardExterno = styled.div`
display: flex;
align-items: center;
width: 60%;
margin-top:7%;
margin-left: 10%;
background:#f1f1f1;
box-shadow: 0 0 10px 0 #f7df1e;

select,

  option {
    margin-right: 10px; 
    padding: 5px;
    width: 25%;
    border-radius: 5px;
    
  }
`;

export const Card = styled.div`
  padding: 8px;
  background-color: #fff;
  text-decoration: none;
  color: #000;
  width: 70%;
  height: 50%;
  margin: 15px;
  border-radius: 5px;

`;

export const CardText = styled.div`
font-family: Arial, Helvetica, sans-serif;
`;