import styled from 'styled-components'

export const Container = styled.div`
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
export const Window = styled.div`
  position: relative;
  max-width: 1000px;
  max-height: 850px;
  padding: 30px;
  width: 75%;
  border: 2px solid rgba(79, 82, 255, 0.7);
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
`

export const CloseModal = styled.div`
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

export const Content = styled.div`
  overflow: hidden;
  overflow-y: auto;
  max-height: 750px;
  width: 100%;

  h3 {
    font-size: 34px;
    font-weight: 700;
    text-align: center;
  }
`
export const Box = styled.div`
  .row {
    margin-top: 20px;
  }
`

export const InputPlus = styled.div`
  margin-top: 20px;

  .array {
    max-height: 200px;
    overflow: hidden;
    overflow-y: auto;
    margin-top: 5px;
    padding: 10px;
    border: 1px solid rgba(82, 191, 255, 0.5);
    border-radius: 5px;
    p {
      margin: 5px 0px;
      word-wrap: break-word;
      font-size: 22px;
      ${({ isLinks }) =>
        isLinks &&
        `
        color: blue;
        text-decoration: underline;
        `}
    }
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      padding-bottom: 5px;
      width: 100%;
    }
    span {
      margin-left: 20px;
      color: green;
      font-size: 25px;
      padding: 5px 10px;
      :hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }
`
export const AddButton = styled.div`
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
