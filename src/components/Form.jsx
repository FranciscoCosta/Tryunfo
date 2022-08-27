import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor='name-input'>
          <span>Nome</span>
          <input data-testid='name-input' />
        </label>
        <label htmlFor='description-input'>
          <span>Descrição</span>
          <textarea name='' id='' data-testid='description-input'>
            {' '}
          </textarea>
        </label>
        <label htmlFor='attr1-input'>
          <span>Atributo 1:</span>
          <input type='number' name='' id='' data-testid='attr1-input' />
        </label>
        <label htmlFor='attr2-input'>
          <span>Atributo 2:</span>
          <input type='number' name='' id='' data-testid='attr2-input' />
        </label>
        <label htmlFor='attr3-input'>
          <span>Atributo 3:</span>
          <input type='number' name='' id='' data-testid='attr3-input' />
        </label>
        <label htmlFor='image-input'>
          <span>Imagem:</span>
          <input type='text' data-testid='image-input' />
        </label>
        <label htmlFor='rare-input'>
          <span>Raridade:</span>
          <select name='' id='' data-testid='rare-input'>
            <option value='normal'>Normal</option>
            <option value='raro'>Raro</option>
            <option value='muito raro'>Muito Raro</option>
          </select>
        </label>
        <label htmlFor='trunfo-input'>
          <span>É super Trunfo ?</span>
          <input type='checkbox' name='' id='' data-testid='trunfo-input' />
        </label>
        <button data-testid='save-button'>Salvar</button>
      </form>
    );
  }
}

export default Form;
