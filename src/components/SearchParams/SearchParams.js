import React, { useState, useEffect, useContext } from 'react';
import { StyledSearchParams } from './StyledSearchParams.js';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from '../../hooks/useDropdown.js';
import { API_KEY, API_SECRET } from '../../API.js';
import axios from 'axios';
import Results from '../Results/Results.js';
import ThemeContext from '../../context/ThemeContext.js';

function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

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
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button type="submit" style={{ background: theme }}>
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </StyledSearchParams>
  );
}

export default SearchParams;
