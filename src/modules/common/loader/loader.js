import * as React from 'react'
import styled from 'styled-components'

import './Loader.scss'

export const Loader = () => (
    <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube" />
        <div className="sk-cube2 sk-cube" />
        <div className="sk-cube3 sk-cube" />
        <div className="sk-cube4 sk-cube" />
    </div>
)

export const LoaderSmall = () => (
    <div className="sk-folding-cube small">
        <div className="sk-cube1 sk-cube" />
        <div className="sk-cube2 sk-cube" />
        <div className="sk-cube3 sk-cube" />
        <div className="sk-cube4 sk-cube" />
    </div>
)

export const Spinner = styled.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.3em solid ${({ theme }) => theme.colors.greyscale.white[20]};
  border-right: 0.3em solid ${({ theme }) => theme.colors.greyscale.white[20]};
  border-bottom: 0.3em solid ${({ theme }) => theme.colors.greyscale.white[20]};
  border-left: 0.3em solid ${({ theme }) => theme.colors.greyscale.white.default};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  border-radius: 50%;
  width: ${({ size }) => size || '2.8em'};
  height: ${({ size }) => size || '2.8em'};

  &:after {
    border-radius: 50%;
    width: ${({ size }) => size || '2.8em'};
    height: ${({ size }) => size || '2.8em'};
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
