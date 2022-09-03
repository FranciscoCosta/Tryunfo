import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div>
        <h1>Carta</h1>
        <div className="name-card">
          <h4>Nome da carta:</h4>
          <p data-testid="name-card">{cardName}</p>
        </div>
        <div className="description-card">
          <h4>Descricao:</h4>
          <p data-testid="description-card">{cardDescription}</p>
        </div>

        <div className="image-card">
          <h4>Imagem:</h4>
          <img
            src={ cardImage }
            data-testid="image-card"
            alt={ cardName }
          />
        </div>
        <div className="attr-card">
          <h4>Atributo 1:</h4>
          <p data-testid="attr1-card">{cardAttr1}</p>
        </div>
        <div className="attr-card">
          <h4>Atributo 2:</h4>
          <p data-testid="attr2-card">{cardAttr2}</p>
        </div>
        <div className="attr-card">
          <h4>Atributo 3:</h4>
          <p data-testid="attr3-card">{cardAttr3}</p>
        </div>
        <div className="rare-card">
          <h4>Raridade:</h4>
          <p data-testid="rare-card">{cardRare}</p>
        </div>
        <div className="trunfo-card">
          <h4>SuperTrunfo:</h4>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        </div>

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
