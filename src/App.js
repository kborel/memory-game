import React from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import Header from './components/Header';
import Layout from './components/Layout';
import Cards from './components/Cards';
import * as actions from './ducks/cards';
import { getCards } from './ducks/cards';

import { Component } from 'react';

class App extends Component {
  componentWillMount() {
    this.props.onNewGameClick();
  }

  render() {
    const { cards, onNewGameClick, onCardClick } = this.props;
    return (
      <Layout>
        <Header>
          <h1>Memory Game</h1>
          <a onClick={onNewGameClick} >New Game</a>
        </Header>
        <Cards>
          {cards.map(({status, id, color}) =>
            <Card
              key={id}
              isHidden={status === 'hidden'}
              color={color}
              onCardClick={
                status !== 'hidden' 
                ? undefined
                : () => onCardClick(id)
              }
            />
          )}
        </Cards>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  cards: getCards(state)
});

export default connect(
  mapStateToProps, 
  {  
    onNewGameClick: actions.newGame,
    onCardClick: actions.selectCard,
  }
)(App);