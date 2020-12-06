import React from 'react';
import { css, cx } from "emotion";
import Button from '../Button'
const closeStyle = cx(css`
  position: fixed;
  left: 0;
  width: 100%;
  right: 0;
  bottom: 70px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
`)

const Close = ({ onClose }) => {
  return (
    <div className={closeStyle}>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
};

export default Close;