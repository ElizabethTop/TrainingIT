import styled from 'styled-components'

export const MainContainer = styled.div``

export const Content = styled.div``

export const BoxCalendar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 350px;
  margin-top: 15px;
  font-size: 24px;
`
export const Month = styled.div`
  width: 30%;
  text-align: center;
  p:nth-child(1) {
    font-size: 70px;
  }
  p:nth-child(2) {
    font-size: 50px;
  }
`

export const Calend = styled.div`
  width: 50%;
`
export const NoNews = styled.div`
  border: 1px dashed grey;
  text-align: center;
  margin: 30px 0px;
  padding: 130px 20px;
  font-size: 28px;
`

export const News = styled.div`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 80%;
  h2 {
    font-size: 40px;
    margin: 0px 0px 0px 60px;
  }
  h3 {
    font-size: 30px;
  }
`

export const HeadNews = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const AddNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  border-radius: 5px;
  border: 2px dashed rgba(180, 180, 180, 1);

  button {
    padding: 10px;
    font-weight: 700;
    border-radius: 5px;
    background-color: rgba(200, 200, 200, 0.4);
  }

  :hover {
    transform: scale(1.02);
  }
`

export const NewsBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 20px 0px;
  max-height: 500px;
  border-radius: 10px;
  border: 2px solid rgba(102, 102, 102, 0.3);

  :hover {
    transform: scale(1.01);
  }
`

export const DeleteNews = styled.div`
  span {
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    opacity: 0.3;

    :hover {
      opacity: 1;
      border-radius: 50%;
      border: 1px solid red;
      cursor: pointer;
    }
  }
`

export const LeftInfo = styled.div`
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;

  .head {
    text-align: center;
  }
  .text {
    margin: auto 0px;
  }
  .description {
    margin-bottom: 25px;
  }
  p {
    margin: 7px 0px;
  }
`
export const RightInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 380px;
  margin: 0px auto;
  font-size: 24px;

  img {
    width: 100%;
    max-height: 250px;
  }
`
