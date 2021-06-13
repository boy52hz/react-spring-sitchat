import styled from 'styled-components'

const ButtonStyle = styled.button`
	padding: 10px 20px;
	font-size: 1em;
	margin: 10px 0;
	width: 100%;
	outline: none;
	border: none;
	background-color: var(--primary-color);
	color: white;
	transition: all .4s ease-out;

	:hover {
		background-color: var(--primary-color-hover);
		cursor: pointer;
	}

	:active {
		background-color: var(--primary-color);
	}
`
const Button = (props) => {
  return (
		<ButtonStyle {...props}>{ props.children }</ButtonStyle>
	)
}

Button.propTypes = {
	
}

export default Button