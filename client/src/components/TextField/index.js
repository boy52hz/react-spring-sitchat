import { Fragment } from 'react'
import { StyledTextField } from './style'

const TextField = ({...props}) => {
  return (
    <Fragment>
      <StyledTextField {...props}></StyledTextField>
    </Fragment>
  )
}

export default TextField
