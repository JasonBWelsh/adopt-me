import React from 'react';
import { StyledResults } from './StyledResults.js';
import Pet from '../Pet/Pet.js';

function Results({ pets }) {
  console.log('DRD inside Results log `pets`:::', pets);
  const { name, type, id } = pets;
  console.log('DRDX test destructured props inside Results:::', name);
  return (
    <StyledResults className="search">
      {pets.length === 0 ? (
        <h1>No pets found :(</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.type}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city} ${pet.contact.address.state}`}
            id={pet.id}
          />
        ))
      )}
    </StyledResults>
  );
}

export default Results;
