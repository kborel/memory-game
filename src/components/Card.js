import styled from 'styled-components';
import React from 'react';

const Card = ({color, isHidden, onCardClick}) => {
  return (
    <Div 
      color={color}
      isHidden={isHidden}
      onClick={onCardClick}
    />
  );
};

export default Card;


const Div = styled.div`
  width: 200px;
  height: 200px;
  border: 10px solid gray;
  border-radius: 15%;
  background-color: ${props => props.isHidden ? 'gray' : props.color};
  transition: background-color 1s;
`