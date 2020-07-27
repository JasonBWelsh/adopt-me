import React from 'react';
import { StyledPet } from './StyledPet';

function Pet({ name, animal, breed }) {
  return (
    <StyledPet>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </StyledPet>
  );
}

export default Pet;
