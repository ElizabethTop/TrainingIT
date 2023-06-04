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
  background-color: rgba(125, 125, 125, 0.3);
`
export const Window = styled.div`
  position: relative;
  padding: 60px;
  width: 75%;
  max-width: 600px;
  border: 3px solid #7abfff;
  border-radius: 5px;
  background-color: white;
`

export const CloseModal = styled.div`
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

export const Content = styled.div`
  overflow: hidden;
  overflow-y: auto;
  max-height: 750px;
  width: 100%;
`
