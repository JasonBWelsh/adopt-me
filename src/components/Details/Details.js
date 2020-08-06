import React from 'react';
import { StyledDetails } from './StyledDetails.js';

function Details(props) {
  return (
    <StyledDetails>
      <h3>Styled Details</h3>
      {
        <pre>
          <code>{JSON.stringify(props, null, 4)}</code>
        </pre>
      }
    </StyledDetails>
  );
}

export default Details;
