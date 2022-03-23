/** @jsx jsx */

import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';

const legendStyle = css`
  .dot {
    border-radius: 50%;
    display: inline-block;
    height: 20px;
    margin: 0 5px;
    width: 20px;
  }
  p {
    display: inline-block;
  }
`;

const Legend: React.FC = () => {

  return (
    <div css={legendStyle}>
      <h2>Legend</h2>

      <span className="dot" style={{backgroundColor: "#002C3D"}}></span>
      <p>Metro Core Community</p><br/>

      <span className="dot" style={{backgroundColor: "#005F73"}}></span>
      <p>Streetcar Suburb</p><br/>

      <span className="dot" style={{backgroundColor: "#94D2BD"}}></span>
      <p>Sub-Regional Urban Center</p><br/>

      <span className="dot" style={{backgroundColor: "#0A9396"}}></span>
      <p>Major Regional Urban Center</p><br/>

      <span className="dot" style={{backgroundColor: "#EBBD34"}}></span>
      <p>Mature Suburb</p><br/>

      <span className="dot" style={{backgroundColor: "#F3D57B"}}></span>
      <p>Established Suburb/Cape Cod Town</p><br/>

      <span className="dot" style={{backgroundColor: "#CA6702"}}></span>
      <p>Maturing New England Town</p><br/>

      <span className="dot" style={{backgroundColor: "#E68C31"}}></span>
      <p>Country Suburb</p><br/>

      <span className="dot" style={{backgroundColor: "#EEB1A0"}}></span>
      <p>Rural Town</p>
    </div>
  );
};

export default Legend;