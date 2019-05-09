import React from 'react'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome'
import { faBowlingBall } from '../../../node_modules/@fortawesome/free-solid-svg-icons'

export default () =>
  <div className='spinner fadein'>
    <FontAwesomeIcon icon={faBowlingBall} size='5x' color='#3B5998' />
  </div>
