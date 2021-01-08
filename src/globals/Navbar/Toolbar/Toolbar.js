import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../assets/img/logo.png';
import { Links } from '../../../components/styledComponents';

export default function Toolbar() {
  const handleClick = () => {
    window.location = '/';
  };
  return (
    <Wrapper>
      <figure onClick={handleClick}>
        <img src={logo} alt="logo" />
      </figure>
      <Links>
        <li>
          <a
            href={
              window.location.pathname === '/add'
                ? '/#currencies'
                : '#currencies'
            }
          >
            Available currencies
          </a>
        </li>
        <li>
          <Link to="/add">Add currency</Link>
        </li>
        <li>
          <a href="https://israel-force.github.io/cv-web">About us</a>
        </li>
        <li>
          <a href="https://israel-force.github.io/cv-web">Contact us</a>
        </li>
      </Links>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  figure {
    cursor: pointer;
    margin: 0 3rem;
    width: 50px;
    & img {
      width: 100%;
    }
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    padding: 2rem 0;
  }
`;
