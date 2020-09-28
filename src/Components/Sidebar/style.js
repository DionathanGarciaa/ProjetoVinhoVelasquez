import styled from 'styled-components';

export const Container = styled.aside`
  background-color #722f37;
  width: 400px;
  
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  

  a {
    border-style: double;
    text-decoration: none;
    padding: 47px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    color: #f7df1e;
    font-size: 25px;
    

    &:hover {
      color: #312e38;
      background-color: #f7df1e;;
      cursor: pointer;
    }
  
  }
  `;
