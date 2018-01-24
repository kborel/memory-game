import React from 'react';
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';
import Card from './components/Card';
import Layout from './components/Layout';
import Cards from './components/Cards';
import * as actions from './ducks/cards';
import { getCards } from './ducks/cards';

import { Component } from 'react';

class App extends Component {
  componentWillMount() {
    this.props.newGame();
  }

  render() {
    const { cards, newGame, onCardClick } = this.props;
    return (
      <Layout>
        <Menu>
          <Menu.Item header>Memory Game</Menu.Item>
          <Menu.Menu position="right">
            <Button primary onClick={newGame}>New Game</Button>
          </Menu.Menu>
        </Menu>
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
    newGame: actions.newGame,
    onCardClick: actions.selectCard,
  }
)(App);