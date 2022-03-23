/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';
import { themeColors, fonts } from '../../utils/theme';
import ToggleSwitch from './ToggleSwitch';
import Legend from './Legend';

interface FilterProps {
  type1: any,
  toggleType1: any,
  type2: any,
  toggleType2: any,
  type3: any,
  toggleType3: any,
  type4: any,
  toggleType4: any,
  type5: any,
  toggleType5: any,
}

const FilterStyle = css`
  background: ${themeColors.white};
  color: navy;
  font-family: ${fonts.avenirNext};
  height: auto;
  min-height: 100vh;
  padding: 0 1.5rem;
  overflow: scroll;
  width: 28rem;
  z-index: 1;
`;

const Filter: React.FC<FilterProps> = ({
  type1,
  toggleType1,
  type2,
  toggleType2,
  type3,
  toggleType3,
  type4,
  toggleType4,
  type5,
  toggleType5
}) => {
    return (
      <div css={FilterStyle}>
        <h1>MAPC Community Types</h1>
        <h2>Filter by Community Type</h2>
        <ToggleSwitch label="Inner Core" state={type1} toggle={toggleType1} />
        <ToggleSwitch label="Regional Urban Center" state={type2} toggle={toggleType2} />
        <ToggleSwitch label="Maturing Suburb" state={type3} toggle={toggleType3} />
        <ToggleSwitch label="Developing Suburb" state={type4} toggle={toggleType4} />
        <ToggleSwitch label="Rural Town" state={type5} toggle={toggleType5} />
        <Legend />
      </div>
    );
};

export default Filter;