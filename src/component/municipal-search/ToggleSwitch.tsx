/** @jsx jsx */

import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import Switch from "react-switch";

interface ToggleSwitchProps {
  label: string,
  state: any,
  toggle: React.Dispatch<React.SetStateAction<any>>
}

const toggleStyle = css`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  width: 100%;
  h3 {
    display: inline;
  }
  .react-switch {
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({label, state, toggle}) => {
  const [checked, setChecked] = useState(true);
  const handleChange = (nextChecked: boolean | ((prevState: boolean) => boolean)) => {
    setChecked(nextChecked);
    toggle(!state);
  };

  return (
    <div css={toggleStyle} className="react-switch-container">
      <label>
        <Switch
          onChange={handleChange}
          onColor="#c9c9fb"
          offColor="#E5E4E2"
          onHandleColor="#4A49F5"
          checkedIcon={false}
          uncheckedIcon={false}
          checked={checked}
          className="react-switch"
        />
        <h3>{label}</h3>
      </label>
    </div>
  );
};

export default ToggleSwitch;