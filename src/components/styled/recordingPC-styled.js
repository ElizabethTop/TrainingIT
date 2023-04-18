import styled from 'styled-components'

export const Container = styled.div``

export const Repair = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px auto;
  width: 90%;
  max-width: 1200px;
  height: 500px;
  font-size: 40px;
  color: grey;
  border: 3px solid green;

  p {
    word-break: break-all;
  }
`

export const AllCards = styled.div`
  margin: 0px auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90%;
`

export const Card = styled.div`
  flex-basis: 40%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid rgba(85, 0, 255, 1);
  border: 2px solid rgba(72, 0, 255, 1);
`

export const ContentCard = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  text-align: center;

  .head {
    margin-bottom: 40px;
    font-size: 28px;
  }

  .text {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
  }
`

export const ButtonCard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button {
    padding: 20px 70px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    border-radius: 5px;
    background: rgba(4, 0, 255, 0.6);

    :hover{
      background: rgba(4, 0, 255, 0.9);
      transform: scale(1.05);
    }
  }
`
