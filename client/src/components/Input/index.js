import { Fragment  } from 'react'
import PropTypes from 'prop-types'
import { InputStyle, InvalidMessage } from './style.js'

const Input = ({invalidMsg, ...props}) => {
  return (
		<Fragment>
			<InputStyle {...props} invalid={ invalidMsg !== '' }/>
			<InvalidMessage>
				{ invalidMsg }
			</InvalidMessage>
		</Fragment>
	)
}

Input.defaultProps = {
	invalidMsg: ''
}

Input.propTypes = {
	invalidMsg: PropTypes.string
}

export default Input
