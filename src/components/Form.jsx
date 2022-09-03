import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      onSubmit,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form onSubmit={ onSubmit }>
        <label htmlFor="name-input">
          <span>Nome</span>
          <input
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            name="cardName"
          />
        </label>
        <label htmlFor="description-input">
          <span>Descrição</span>
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            name="cardDescription"
          />
        </label>
        <label htmlFor="attr1-input">
          <span>Atributo 1:</span>
          <input
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            name="cardAttr1"
          />
        </label>
        <label htmlFor="attr2-input">
          <span>Atributo 2:</span>
          <input
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            name="cardAttr2"
          />
        </label>
        <label htmlFor="attr3-input">
          <span>Atributo 3:</span>
          <input
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            name="cardAttr3"
          />
        </label>
        <label htmlFor="image-input">
          <span>Imagem:</span>
          <input
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            name="cardImage"
          />
        </label>
        <label htmlFor="rare-input">
          <span>Raridade:</span>
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name="cardRare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <span>É super Trunfo ?</span>
          <input
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
            name="cardTrunfo"
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
