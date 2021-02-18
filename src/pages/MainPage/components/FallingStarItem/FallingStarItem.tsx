import React from 'react';
import star from 'assets/star.png';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate = keyframes`
    0% {
      opacity: 0;
      transform: translate(5rem, 0rem) rotate(0deg);
      transition: transform 300ms opacity 300ms ease-in-out 0.5s;
    }
    50% {
      opacity: 1;
      transform: translate(25rem, 12rem) rotate(90deg);
      transition: transform 100ms opacity 300ms ease-in-out 0.5s;
    }
    100% {
      opacity: 0;
      transform: translate(5rem, 35rem) rotate(180deg);
      transition: transform 300ms opacity 300ms ease-in-out 0.5s;
    }
`;

const Star = styled.div(() => ({
  width: '25%',
  height: '25%',
  display: 'flex',
  textAlign: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${star})`,
  animation: `${rotate} 3500ms ease-in-out infinite`,
  '& span': {
    alignSelf: 'center',
    margin: 'auto',
    userSelect: 'none',
    fontFamily: '"Roboto", sans-serif',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '70px',
    lineHeight: '70px',
  },
}));

interface Props {
  currentNumber: string | number;
}

const FallingStarItem = ({ currentNumber }: Props): JSX.Element => {
  return (
    <Star>
      <span>{currentNumber}</span>
    </Star>
  );
};

export default FallingStarItem;
