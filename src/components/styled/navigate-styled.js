import styled from 'styled-components'

export const NavContainer = styled.div`
  z-index: 50;
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  background: #bababa;
`
export const Sections = styled.div`
  flex-grow: 1;
  max-width: 1300px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 10px 0px;
`
export const HeadNav = styled.p`
  padding: 20px 5%;
  border-radius: 5px;

  :hover {
    transform: scale(1.05);
    background: rgba(119, 190, 237, 0.9);
    cursor: pointer;
  }

  ${(props) =>
    props.select === true &&
    `border-radius: 5px;
    color: white;
    background-color: rgba(141, 110, 255, 0.5);
    background-color: rgba(110, 146, 255, 1);`};
`

export const Detail = styled.div`
  position: absolute;
  right: 0px;
  top: 0;
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(70, 189, 127, 1);

  opacity: 0.05;

  :hover {
    background-color: rgba(70, 189, 127, 1);
    cursor: pointer;
    opacity: 1;
  }
`

export const UserList = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(125, 125, 125, 0.7);
`

export const WindowUL = styled.div`
  position: relative;
  padding: 30px;
  width: 75%;
  max-width: 1000px;
  max-height: 800px;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 5px;
  border: 3px solid rgba(79, 82, 255, 0.7);
  background-color: white;

  .headUL {
    font-size: 26px;
    text-align: center;
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
export const ListUL = styled.div``

export const User = styled.div`
  position: relative;
  margin: 15px 0px;
  padding: 15px;
  border-radius: 5px;
  background: rgba(175, 255, 173, 0.3);

  p {
    margin: 5px;
  }
`
export const DeleteUser = styled.div`
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
