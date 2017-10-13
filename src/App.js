import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import Header from './components/Header';
import Layout from './components/Layout';
import Cards from './components/Cards';
import * as actions from './ducks/cards';

const App = ({ cards, onNewGameClick }) =>
  <Layout>
    <Header>
      <h1>Memory Game</h1>
      <a onClick={onNewGameClick} >New Game</a>
    </Header>
    <Cards>
      
    </Cards>
  </Layout>

const mapStateToProps = state => ({
  cards: state
});

export default connect(mapStateToProps, {  onNewGameClick: actions.newGame })(App);

//<Card isHidden={true} color="purple" />