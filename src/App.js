import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import * as actions from './ducks/cards';

const App = ({ cards, onNewGameClick }) =>
  <div>
    <button onClick={onNewGameClick} >New Game</button>
  </div>

const mapStateToProps = state => ({
  cards: state
});

export default connect(mapStateToProps, {  onNewGameClick: actions.newGame })(App);

//<Card isHidden={true} color="purple" onCardClick={() => console.log('hi')}/>