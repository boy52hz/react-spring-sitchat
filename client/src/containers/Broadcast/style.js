import styled from 'styled-components'

export const StyledBroadcast = styled.div`
  position: relative;
  text-align: left;
  height: 100%;
  background: rgb(220, 220, 220);
  opacity: 0.8;

  ul {
    list-style: none;
    padding: 15px;
    margin: 0;
    border: 1px solid rgb(180, 180, 180);
    height: 100%;
    overflow-y: scroll;
    width: 50vw;
    height: 50vh;
  }

  li {
    height: 80px;
    height: auto;
    width: 100%;
    padding: 1em;
  }

  p {
    font-size: 22px;
    padding: 5px 0;
  }

  h1 {
    font-weight: 300;
  }
`

export const MainBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 8px 0px rgba(122,122,122,1);
`

export const MainHeader = styled.h1`
  display: flex;
  align-items: center;
  background: var(--primary-color);
  color: white;
  padding: 1em;

  button {
    background: darkred;
    font-size: 16px;
  }

  button:hover {
    background: rgb(180, 0, 0);
  }
`

export const FormGroup = styled.form`
  display: flex;
  margin: 1em 0;
`

export const MainBody = styled.div`
  background: white;
  padding: 2em;
  border-radius: 5px;

  textarea {
    flex: 4;
    border: 1px solid rgb(180, 180, 180);
    width: 100%;
    resize: none;
    font-size: 16px;
    padding: 10px;
  }

  button {
    flex: 1;
    margin: 0;
  }

  textarea:focus {
    outline: none;
  }
`
