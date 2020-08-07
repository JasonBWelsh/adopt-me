import React, { Component } from 'react';
import { StyledDetails } from './StyledDetails.js';
import pet from '@frontendmasters/pet';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      animal: '',
      location: '',
      description: '',
      media: [],
      loading: true,
      error: false,
    };
  }

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

    try {
    } catch (error) {
      console.log('DRD fuck!', error);
    }
  }

  render() {
    return <>{this.state.loading ? <h1>Loading...</h1> : <div>Loaded</div>}</>;
  }
}

export default Details;
