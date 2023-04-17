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
