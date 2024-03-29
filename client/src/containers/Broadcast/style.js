import styled from 'styled-components'

export const StyledBroadcast = styled.div`
  position: relative;
  text-align: left;
  height: 100%;
  background: rgb(220, 220, 220);
  opacity: 0.8;

  ul {
    list-style: none;
    padding: 24px;
    margin: 0;
    border: 1px solid rgb(180, 180, 180);
    background: rgba(80, 160, 240, 0.1);
    height: 100%;
    overflow-y: scroll;
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  p {
    font-size: 22px;
    padding: 5px 0;
  }

  h1 {
    font-weight: 300;
  }
`

export const CustomLi = styled.li`
  height: auto;
  min-width: 60%;
  max-width: 90%;
  padding-top: ${props => props.newGrouping ? '2em' : '.5em'};
  text-align: ${ props => props.isMe ? 'right' : 'left' };
  align-self: ${props => props.isMe ? 'flex-end' : 'flex-start'};
`

export const ChatBox = styled.div`
  padding: 1em;
  border-radius: 10px;
  background: ${ props => props.isMe ? 'var(--primary-color)': 'rgba(200, 200, 200)' };
  color: ${ props => props.isMe ? 'white' : '' };
  text-align: ${ props => props.isMe ? 'right' : 'left' };
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
