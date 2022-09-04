import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

//  Francisco Costa

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    deck: [],
    filtroDeck: '',
  };

  salvaCarta = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const carta = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((estadoa) => ({
      deck: [...estadoa.deck, carta],
    }));
  };

  numeroAtributo = (numero) => {
    const maximo = 90;
    if (Number(numero) >= 0 && Number(numero) <= maximo) {
      return true;
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;
      const attr1 = this.numeroAtributo(cardAttr1);
      const attr2 = this.numeroAtributo(cardAttr2);
      const attr3 = this.numeroAtributo(cardAttr3);
      const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

      const max = 210;
      if (
        cardName
        && cardDescription
        && cardImage
        && cardRare
        && soma <= max
        && attr1
        && attr2
        && attr3
      ) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  handleSumbit = (event) => {
    event.preventDefault();
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.salvaCarta();
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
    });
  };

  apagaCarta = (event) => {
    const { name } = event.target;
    const { deck, hasTrunfo } = this.state;
    const filtroApagar = deck.find(({ cardName }) => cardName === name);

    this.setState({
      deck: [...deck.filter((carta) => carta !== filtroApagar)],
      hasTrunfo: filtroApagar ? !hasTrunfo : hasTrunfo,
    });
  };

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
      hasTrunfo,
      filtroDeck,
      isSaveButtonDisabled,
      deck,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSubmit={ this.handleSumbit }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
        />

        {deck.filter((card) => card.cardName.includes(filtroDeck)).map((carta) => (
          <div key={ carta.cardName }>
            <Card
              cardName={ carta.cardName }
              cardDescription={ carta.cardDescription }
              cardAttr1={ carta.cardAttr1 }
              cardAttr2={ carta.cardAttr2 }
              cardAttr3={ carta.cardAttr3 }
              cardImage={ carta.cardImage }
              cardRare={ carta.cardRare }
              hasTrunfo={ carta.hasTrunfo }
              cardTrunfo={ carta.cardTrunfo }
              key={ carta.cardName }
            />
            <button
              data-testid="delete-button"
              type="submit"
              onClick={ this.apagaCarta }
              name={ carta.cardName }
            >
              Excluir
            </button>
          </div>))}
        <div className="name-filter">
          <h4>Filtro nome:</h4>
          <input
            data-testid="name-filter"
            value={ filtroDeck }
            onChange={ this.onInputChange }
            name="filtroDeck"
          />

        </div>
      </div>
    );
  }
}

export default App;
