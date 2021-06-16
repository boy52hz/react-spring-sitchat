import styled from 'styled-components'

export const InputStyle = styled.input`
	display: block;
	padding: 0.5em 1em;
	margin: 5px 0;
	width: 300px;
	height: 40px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-bottom: 2px solid ${({ invalid }) => invalid ? 'red' : 'rgba(0, 0, 0, 0.2)' };
	transition: all .3s ease-out;
	font-size: 1em;

	:focus {
		outline: none;
		border-bottom-color: ${({ invalid }) => invalid ? 'red' : 'var(--primary-color)' };
		box-shadow: var(--inner-shadow);
	}
`

export const InvalidMessage = styled.span`
	text-align: left;
	color: red;
	width: 100%;
	font-size: 14px;
`