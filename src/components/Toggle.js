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

export default ({  theme, onToggle }) => {

  const icon = `ms-dfc-${theme}`
  const handleToggle = () => {
    onToggle(theme === 'night' ? 'day' : 'night')
  }
  const animation = css`
    margin-bottom: 2rem;
    &:hover {
      animation: ${theme === 'day' ? spin : ''} 5s ease forwards;
      color: var(--accent-color)
    }
  `

  return (
    <div className={cx(animation)} onClick={handleToggle}>
      <ManaSymbol icon={`${icon} ms-4x`} />
    </div>
  )
}