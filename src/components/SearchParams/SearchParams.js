import React, { useState, useEffect } from 'react';
import { StyledSearchParams } from './StyledSearchParams.js';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from '../../hooks/useDropdown.js';
import { API_KEY, API_SECRET } from '../../API.js';
import axios from 'axios';
import Results from '../Results/Results.js';

function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    requestPets();
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
      <Results pets={pets} />
    </StyledSearchParams>
  );
}

export default SearchParams;
