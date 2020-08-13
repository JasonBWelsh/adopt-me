import React, { Component } from 'react';
// import { StyledDetails } from './StyledDetails.js';
import pet from '@frontendmasters/pet';
import { navigate } from '@reach/router';
import Modal from '../../modal/Modal.js';
import Carousel from '../Carousel/Carousel.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';
import ThemeContext from '../../context/ThemeContext.js';

class Details extends Component {
  state = {
    url: '',
    name: '',
    animal: '',
    location: '',
    description: '',
    media: [],
    loading: true,
    error: false,
    showModal: false,
  };

  componentDidMount() {
    console.log('DRD test log `pet`', pet);
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          ...this.state,
          url: animal.url,
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

  toggleModal = () => {
    this.setState({ ...this.state, showModal: !this.state.showModal });
  };

  adopt = () => {
    navigate(this.state.url);
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ background: theme }} onClick={this.toggleModal}>
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, I'm a monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
