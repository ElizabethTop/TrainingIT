import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(125, 125, 125, 0.3);
`

export const Window = styled.div`
  position: relative;
  padding: 30px;
  width: 75%;
  max-width: 1000px;
  border: 3px solid #7abfff;
  border-radius: 5px;
  background-color: white;

  input {
    margin-top: 5px;
    padding: 7px;
    font-size: 22px;
    border-radius: 5px;
    border: 1px solid #52bfff;
    width: 100%;
  }

  textarea {
    resize: none;
    padding: 7px;
    font-size: 22px;
    height: 150px;
    border-radius: 5px;
    border: 1px solid #52bfff;
  }
`
export const CloseIcon = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  font-size: 33px;
  color: red;
  opacity: 0.6;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`

export const Head = styled.div`
  font-size: 30px;
  text-align: center;
`

export const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const FirstLine = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  div {
    margin-bottom: 20px;
  }

  /* div:nth-child(1) {
    margin-right: 20px;
  } */
`

export const SecondLine = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  span {
    margin-bottom: 10px;
  }
`

export const Links = styled.div`
  margin-top: 20px;
`

export const Publicbutton = styled.div`
  margin-top: 30px;
  text-align: center;
  button {
    width: 70%;
    padding: 15px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 20px;
    border-radius: 5px;
    background: #99e0ab;
    background: rgba(0, 184, 67, 0.7);

    :hover {
      transform: scale(1.02);
    }
  }
`
