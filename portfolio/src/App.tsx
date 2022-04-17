import React from 'react';
import styled, { keyframes } from 'styled-components';

const Appear = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 100%;
  }
`;

const AnimatedLetter = styled.span<{ duration: number }>`
  overflow: hidden;
  display: inline-block;
  font-family: 'Oswald';
  font-size: 34px;
  animation-name: ${Appear};
  animation-duration: ${(props) => props.duration}s;
  animation-timing-function: linear;
`;

const TOP_TEXT: string = 'Hi, my name is';
const BOTTOM_TEXT = 'Artem Kostylev';

// TODO: last letters are too slow

export const App = () => {
  return (
    <div>
      <div style={{overflow: 'hidden'}}>
        {TOP_TEXT.toUpperCase()
          .split('')
          .map((it, index) => (
            <AnimatedLetter duration={0.1 + index * 0.03} key={index}>
              {it}
            </AnimatedLetter>
          ))}
      </div>
      <div style={{overflow: 'hidden'}}>
        {BOTTOM_TEXT.toUpperCase()
          .split('')
          .map((it, index) => (
            <AnimatedLetter duration={0.1 + index * 0.03} key={index}>
              {it}
            </AnimatedLetter>
          ))}
      </div>
    </div>
  );
};
