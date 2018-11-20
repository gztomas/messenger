import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  margin: 0;
  width: 30px;
  text-align: center;
  opacity: 0.2;
  color: #ccc;
  & > div {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    background: rgba(0, 0, 0, 1);
  }
  & > div:nth-child(1) {
    animation-delay: -0.32s;
  }
  & > div:nth-child(2) {
    animation-delay: -0.16s;
  }
  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

const TypeSpinner = () => (
  <Styled>
    <div />
    <div />
    <div />
  </Styled>
);

export default TypeSpinner;
