import styled from 'styled-components'
import React from 'react'
import Box from './Box'
import { keyframes } from 'styled-components'
import theme from './theme'

const animation = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 56px; // 64px - 3px border on two sides
    height: 56px;
    opacity: 0;
  }
`

const Base = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border-radius: 50%;
`
const Inner = styled(Box)`
  position: absolute;
  border: 4px solid currentColor;
  opacity: 1;
  border-radius: 50%;
  transform-origin: center;
  animation: ${animation} 0.975s ease-out infinite;
`

const Loading = (props) => (
  <Base role="presentation" aria-label="Loading" {...props}>
    <Inner />
    <Inner />
  </Base>
)

Loading.defaultProps = {
  theme,
  color: 'primary',
}

export default Loading
