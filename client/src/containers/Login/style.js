import styled  from 'styled-components'

export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  background: rgb(220, 220, 220);

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: all .3s ease-out;
  }

  a:hover {
    color: var(--primary-color-hover);
    transform: scale(1.01);
  }

  h1 {
    font-weight: 300;
    padding: 1em 0;
  }
`

export const MainBody = styled.div`
  max-width: 1020px;
  background: white;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0px 4px 8px 0px rgba(122,122,122,1);
`

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`