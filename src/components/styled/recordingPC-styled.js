import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
`

export const AllCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 60px 0px 20px 50px;
    font-size: 40px;
  }
`
export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 20px 0px;
  width: 100%;

  .group {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .groupCards {
    display: flex;
  }
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 50px;
  width: 350px;
  height: 250px;
  font-size: 32px;
  border-radius: 5px;
  box-shadow: 10px 5px 20px grey;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 0.5) 0%,
    rgba(253, 29, 29, 0.5) 50%,
    rgba(252, 176, 69, 0.5) 100%
  );
  color: white;

  h3 {
    text-align: center;
    font-size: 46px;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  font-size: 80px;
  svg {
    width: 100%;
  }
`

export const AddCard = styled.div`
  display: flex;
  justify-content: right;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    border-radius: 5px;
    border: 2px dashed rgba(180, 180, 180, 1);

    :hover {
      transform: scale(1.02);
    }
  }

  button {
    padding: 10px;
    font-weight: 700;
    border-radius: 5px;
    background-color: rgba(200, 200, 200, 0.4);
  }
`
