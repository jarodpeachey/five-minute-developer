import React from 'react';
import styled, { css } from 'styled-components';

const Line = ({ height, background, width, margin }) => {
  return <StyledLine height={height || 2} background={background || 'white'} width={width || '100%'} margin={margin || 16} />;
};

const StyledLine = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin}px auto;
  background: ${props => props.background};
`;

export default Line;
