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
  border: 5px solid gray;
  border-radius: 1rem;
  background-color: ${props => props.isHidden ? 'gray' : props.color};
  ${props => props.isHidden && `cursor: pointer;`}
  transition: background-color 1s;
`