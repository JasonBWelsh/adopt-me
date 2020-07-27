import React, { useState } from 'react';
import { StyledSearchParams } from './StyledSearchParams.js';
import { ANIMALS } from '@frontendmasters/pet';

function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, setAnimal] = useState(''); // dog by default
  const [breed, setBreed] = useState('');

  console.log('DRD ANIMALS:::', ANIMALS);

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('DRD', location);
  };

  const handleAnimalSelectChange = (event) => {
    console.log('synthetic event:', event);
    setAnimal(event.target.value);
  };

  const handleBreedSelectChange = (event) => {
    console.log('synthetic event:', event);
    setBreed(event.target.value);
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
        {/* Animal dropdown */}
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={handleAnimalSelectChange}
          >
            <option value="all">All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        {/* Breeds dropdown */}
        <label htmlFor="breed">
          Animal
          <select id="breed" value={breed} onChange={handleBreedSelectChange}>
            <option value="all">All</option>
            {ANIMALS.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Search Location</button>
      </form>
    </StyledSearchParams>
  );
}

export default SearchParams;
