
import React from 'react';
import Wrapper, { Container, LeftSide, RightSide } from './Toolbar.style';

//@ts-ignore
export default function Toolbar({ left, right }) {
  const addAllClasses = ['toolbar'];

  return (
    <Wrapper className={addAllClasses.join(' ')}>
      <Container>
        {left && <LeftSide className="toolbar_left__side">{left}</LeftSide>}
        {right && (
          <RightSide className="toolbar_right__side">{right}</RightSide>
        )}
      </Container>
    </Wrapper>
  );
}