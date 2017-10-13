import React from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import Header from './components/Header';
import Layout from './components/Layout';
import Cards from './components/Cards';
import * as actions from './ducks/cards';
import { getCards } from './ducks/cards';

const App = ({ cards, onNewGameClick }) =>
  <Layout>
    <Header>
      <h1>Memory Game</h1>
      <a onClick={onNewGameClick} >New Game</a>
    </Header>
    <Cards>
      {cards.map(({isHidden, id, color}) =>
        <Card key={id} isHidden={isHidden} color={color} />
      )}
    </Cards>
  </Layout>

const mapStateToProps = state => ({
  cards: getCards(state.cards)
});

export default connect(mapStateToProps, {  onNewGameClick: actions.newGame })(App);