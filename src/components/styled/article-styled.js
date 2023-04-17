import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1150px;
`

export const GoBack = styled.div`
  button {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: rgba(184, 207, 116, 0.5);
    :hover {
      transform: scale(1.02);
    }
  }
`

export const Head = styled.div`
  margin-top: 10px;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`

export const Body = styled.div`
  margin-top: 20px;
`

export const Text = styled.div`
  font-size: 20px;
  line-height: 25px;
  text-align: justify;

  p {
    margin-bottom: 20px;
    text-indent: 30px;
  }
`

export const Links = styled.div`
  display: flex;
  margin-top: 100px;

  .noLinks {
    color: grey;
  }

  div {
    margin-left: 20px;
  }
  p {
    margin-bottom: 5px;
    word-break: break-all;
  }
  a {
    text-decoration: underline;
  }
`
