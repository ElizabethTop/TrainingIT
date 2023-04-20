import styled from 'styled-components'

export const DetailCard = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(125, 125, 125, 0.5);
`
export const ContentCard = styled.div`
  position: relative;
  max-width: 1000px;
  max-height: 730px;
  padding: 30px;
  width: 75%;
  border: 2px solid rgba(79, 82, 255, 0.7);
  border-radius: 5px;
  background-color: white;
`

export const CloseIconCard = styled.div`
  position: absolute;
  top: -17px;
  right: -17px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  font-size: 33px;
  color: red;
  opacity: 0.7;
  :hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.02);
  }
`

export const Window = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 34px;
    font-weight: 700;
  }
`

export const Box2 = styled.div`
  overflow: hidden;
  overflow-y: auto;
  max-height: 500px;
  width: 100%;
  margin: 30px 0px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  word-wrap: break-word;

  p {
    margin: 10px 10px;
  }
  span {
    font-style: italic;
    text-decoration: underline;
  }
`
export const Questions = styled.div`
  font-size: 24px;

  span {
    font-size: 26px;
  }
`
export const Links = styled.div`
  margin-top: 40px;
  width: 100%;

  span {
    font-size: 22px;
  }
`
export const Box3 = styled.div`
  padding: 0px 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  word-wrap: break-word;

  button {
    width: 100%;
    padding: 20px 70px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 5px;
    color: white;
    border-radius: 5px;
    background: rgba(4, 0, 255, 0.6);

    :hover {
      background: rgba(4, 0, 255, 0.9);
      transform: scale(1.05);
    }
  }
`
