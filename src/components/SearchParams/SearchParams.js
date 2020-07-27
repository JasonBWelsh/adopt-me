import React, { useState } from 'react';
import { StyledSearchParams } from './StyledSearchParams.js';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from '../../hooks/useDropdown.js';

function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

  console.log('DRD ANIMALS:::', ANIMALS);

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('DRD', location);
  };

  return (
    <StyledSearchParams className="search-params">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={handleInputChange}
            onBlur={handleInputChange}
          ></input>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button type="submit">Search Location</button>
      </form>
    </StyledSearchParams>
  );
}

export default SearchParams;
