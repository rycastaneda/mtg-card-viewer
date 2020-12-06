import { css, cx } from "emotion";
import React from "react";

export default React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      className={cx(css`
        appearance: none;
        border: none;
        padding: 8px 12px;
        border-radius: 4px;
        background: var(--background-color);
        outline: none;
        font-size: 16px;
        line-height: 1;
        font-weight: bold;
        color: var(--text-color);
        cursor: pointer;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
        border: 1px solid var(--text-color);
        transition: box-shadow 0.2s ease-in;
        margin-bottom: 3rem;
        &:hover {
          box-shadow: 0 0px 5px var(--accent-color);
        }

        > i {
          color: var(--accent-color);
        }
      `)}
      {...props}
    />
  );
});
