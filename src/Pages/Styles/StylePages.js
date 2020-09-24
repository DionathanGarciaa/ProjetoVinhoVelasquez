import styled from 'styled-components';


export const Container = styled.main`
  margin: 0 auto;
  margin-top: 5px;
  overflow: scroll;
  overflow-x: hidden;
  flex: 1;
  margin-left: 40px;
  /* background: red; */
  padding-top: 10px;
  padding-bottom: 150px;



  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }


  &::-webkit-scrollbar {
    width: 9px;
    background-color: #121214;
  }


  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f7df1e;
  }


  div {
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;
    width: 500px;


    &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: '';
      background: #f7df1e;
    }



    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }



    section {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      margin-left: 24px;



      strong {
        color: #f2f2f2;
        font-weight: bold;
      }


      span {
        font-weight: 300;
        color: #f2f2f2;
      }



      .date {
        color: #999;
        font-size: 12px;
        margin-top: 20px;
      }



      .value {
        color: #999;
        font-size: 20px;
        margin-top: 20px;
        color: #f7df1e;
        font-weight: bold;
      }
    }
  }
`;

