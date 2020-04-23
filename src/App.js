import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';

import Tabela from './Tabela';

import Form from './Formulario';

class App extends Component {
  state = {
    autores : [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'Nico',
        livro: 'Java',
        preco: '999',
      }
    ]
  };

  removeAutor = (index) => {
    const { autores } = this.state;
    this.setState({
      autores: autores.filter((autor, pos) => {
        return pos !== index;
      })
    })
  }

  adicionaAutor = autor => {
    this.setState({ autores:[...this.state.autores, autor] })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
        <Tabela autores = {this.state.autores} removeAutor={this.removeAutor} />
        <Form adicionaAutor={this.adicionaAutor} />
        </div>
      </Fragment>
    );
  }
}

export default App;
