import styled from 'styled-components'

export const Сontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px 0px;
  background: linear-gradient(to bottom right, green, pink);
  background: linear-gradient(
    140deg,
    rgba(148, 255, 203, 0.3),
    rgba(26, 0, 255, 0.3)
  );
  min-height: 91.6vh;
`
export const Login = styled.div`
  display: flex;
  max-width: 900px;
  width: 80%;
  border: 2px solid grey;
  border-radius: 1px;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 780px) {
    flex-direction: column;
  }
`

export const Box1 = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 40px;
  padding-right: 80px;
  background: white;
`

export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 40%;
  padding: 40px;
  background: rgba(0, 0, 0, 0.3);

  @media (max-width: 780px) {
    flex-direction: column;
    max-width: 100%;
  }
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  span {
    font-size: 20px;
  }

  input {
    width: 100%;
    margin-top: 7px;
    padding: 5px;
    font-size: 20px;
    border: 1px solid grey;
  }
`
export const SignButton = styled.div`
  margin-top: 60px;
  max-width: 70%;
`

export const RegButton = styled.div`
  margin-top: 60px;
`

export const Button = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  padding: 20px 70px;
  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`

export const Registration = styled(Login)`
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px;
  padding-bottom: 40px;
  border-radius: 3px;
  background-color: white;
  min-width: 500px;
  width: 650px;

  button {
    border-radius: 3px;
    :hover {
      transform: scale(1.03);
    }
  }

  @media (max-width: 750px) {
    width: 90%;
  }
  @media (max-width: 550px) {
    min-width: 0px;
  }
`
export const Back = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  button {
    padding: 10px 15px;
    color: rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 0, 0, 0.4);
  }
`

export const RegBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  width: 80%;
`
export const Registrat = styled.div`
  margin-top: 30px;
  button {
    padding: 20px 40px;
    font-size: 20px;
    background-color: rgba(43, 207, 52, 0.9);

    :hover {
      background-color: rgba(43, 207, 52, 1);
    }
  }
`

export const Roles = styled.div`
  display: flex;
  margin-top: 20px;

  p {
    margin: 10px 0px;
  }
  p:nth-child(1) {
    margin-right: 50px;
  }
  label {
    margin-left: 5px;
  }

  input,
  label,
  p {
    :hover {
      cursor: pointer;
    }
  }
`
