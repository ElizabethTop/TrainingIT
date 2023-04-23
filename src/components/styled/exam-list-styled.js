import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div`
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid rgba(107, 174, 255, 1);

  h3 {
    text-align: center;
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h2 {
    font-size: 22px;
    font-style: italic;
  }
`

export const Exams = styled.div`
  margin: 10px 10px 10px 25px;
`

export const Exam = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  background: rgba(141, 204, 196, 0.2);

  .data {
    display: flex;
    flex-direction: column;
  }

  .fio {
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    p:first-child {
      margin-right: 10px;
    }
  }

  .details {
    margin-top: 5px;
    color: grey;
    text-transform: lowercase;
  }

  .buttons-exam {
    margin-right: 5%;
  }
`

export const DeleteIcon = styled.div`
  position: absolute;
  top: -12px;
  right: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 26px;
  color: red;
  opacity: 0.3;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
    opacity: 1;
  }
`

export const ButtonExam = styled.button`
  margin: 5px 15px;
  padding: 10px 20px;
  font-weight: 700;
  color: white;
  border-radius: 5px;
  opacity: 0.4;
  background: ${(props) => props.bg && `${props.bg}`};
  :hover {
    opacity: 1;
  }
`
