import React, { Component } from 'react';
// import { StyledDetails } from './StyledDetails.js';
import pet from '@frontendmasters/pet';
import Carousel from '../Carousel/Carousel.js';

class Details extends Component {
  state = {
    name: '',
    animal: '',
    location: '',
    description: '',
    media: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    console.log('DRD test log `pet`', pet);
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        console.log('DRD :( ==>', error);
        this.setState({ ...this.state, error: true, loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { animal, breed, location, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
        <Carousel media={this.state.media} />
      </div>
    );
  }
}

export default Details;
