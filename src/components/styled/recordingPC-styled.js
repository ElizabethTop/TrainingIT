import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 20px 50px 20px;
`

export const Alternative = styled.div`
  margin: 150px 0px;
  text-align: center;
  font-size: 26px;
  p {
    margin-bottom: 10px;
  }
`

export const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div:last-child {
    margin-bottom: 0;
  }
  h2 {
    margin-top: 50px;
    font-size: 26px;
  }
`
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 40px 0px;
  width: 100%;
`
export const NameGroup = styled.div`
  font-size: 40px;
  text-align: left;
  margin: 0px 0px 20px 40px;
`

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .card-and-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`

export const Card = styled.div`
  position: relative;
  display: flex;
  margin: 10px;
  width: 350px;
  height: 250px;
  border-radius: 5px;
  box-shadow: 10px 5px 20px grey;
  color: white;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 0.5) 0%,
    rgba(253, 29, 29, 0.5) 50%,
    rgba(252, 176, 69, 0.5) 100%
  );

  .head {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 46px;
  }

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`
export const DeleteIcon = styled.div`
  z-index: 3;
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  opacity: 0.1;
  font-size: 22px;

  :hover {
    opacity: 1;
    border-radius: 50%;
    border: 1px solid red;
    cursor: pointer;
  }
`

export const BgBlocked = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  text-align: center;
  padding-top: 40px;
  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
`

export const BgStatus = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 40px;
  font-size: 26px;
  background-color: ${(props) =>
    props.bg === 'green'
      ? 'rgba(26, 255, 0, 0.3)'
      : props.bg === 'blue'
      ? 'rgba(0, 34, 255, 0.4)'
      : 'rgba(255, 0, 0, 0.3)'};
  p {
    font-weight: 700;
    opacity: 0.8;
    color: ${(props) => props.bg && `${props.bg}`};
  }
`

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin: 0px 50px;
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
export const ShowExams = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 20px;

  button {
    padding: 10px;
    font-weight: 700;
    border-radius: 5px;
    background-color: ${(props) =>
      props.bg === 1 ? 'rgba(224, 212, 255, 1)' : 'rgba(212, 238, 255, 1);'};

    :hover {
      transform: scale(1.02);
    }
  }
`
