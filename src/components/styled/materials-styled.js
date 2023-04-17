import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Box = styled.div`
  max-width: 1200px;
  width: 70%;
  display: flex;
  flex-direction: column;
`

export const SearchDocument = styled.div`
  margin-bottom: 20px;
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  p {
    width: 100%;
  }
  input {
    width: 100%;
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid rgba(0, 145, 15, 0.7);
  }
`

export const AddArticle = styled.div`
  margin-top: 5px;
  text-align: right;
  button {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    background-color: rgba(173, 187, 255, 1);
    :hover {
      transform: scale(1.02);
    }
  }
`

export const ListDocument = styled.div``

export const Group = styled.div`
  margin-bottom: 50px;
`

export const HeadGroup = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`

export const Articles = styled.div`
  margin-left: 20px;
  div {
    position: relative;
    margin: 10px 0px;
    padding: 7px;
    border-radius: 5px;
    background-color: rgba(173, 232, 255, 0.3);
    :hover {
      transform: scale(1.02);
      cursor: pointer;
      background-color: rgba(173, 232, 255, 1);
    }
  }

  span {
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    opacity: 0.2;

    :hover {
      opacity: 1;
      border-radius: 50%;
      border: 1px solid red;
      cursor: pointer;
    }
  }
`
export const NoArticles = styled.div`
  margin: 30px 0px;
  padding: 130px 20px;
  font-size: 28px;
  text-align: center;
  border-radius: 5px;
  color: grey;
  border: 1px dashed grey;
`
