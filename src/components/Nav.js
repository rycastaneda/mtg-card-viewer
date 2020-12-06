import { cx, css } from 'emotion'
import React from "react";

import Toggle from './Toggle'

const navToggle = ({ theme, onToggle }) => {
  const handleToggle = () => {
    onToggle(theme === 'night' ? 'day' : 'night')
  }
  return (
    <div className={cx(css`
      position: fixed;
      top: 0;
      left: 0;
      padding: 2rem;
      cursor:pointer;
    `)} onClick={handleToggle}>
      <Toggle theme={theme} />
    </div >
  )
}



export default navToggle