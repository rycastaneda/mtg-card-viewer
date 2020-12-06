import ManaSymbol from './ManaSymbol'
import React from "react"
import { cx, css, keyframes } from 'emotion'

const spin = keyframes`
from {
  transform:rotate(0deg);
}
to {
  transform:rotate(90deg);
}
`

export default ({ theme }) => {

  const icon = `ms-dfc-${theme}`

  const animation = css`
    &:hover {
      animation: ${theme === 'day' ? spin : ''} 5s ease infinite;
      color: var(--accent-color)
    }
  `

  return (
    <div className={cx(animation)}>
      <ManaSymbol icon={`${icon} ms-4x`} />
    </div>
  )
}