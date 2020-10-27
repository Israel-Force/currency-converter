import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <ul>
        <li>
          <a href="https://israel-force.github.io/cv-web">About us</a>
        </li>
        <a href="https://israel-force.github.io/cv-web">Contact us</a>
      </ul>
      <p>Copyright &copy; 2020 Israel-Force</p>
    </Foot>
  );
}

const Foot = styled.div`
  background-color: #0e75b6;
  padding: 1em;
  color: white;
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #f17105;
    }
  }
  p {
    text-align: left;
  }

  ul {
    margin-bottom: 1em;
  }

  & ul li {
    list-style: none;
    margin-bottom: 1em;
  }
  @media only screen and (min-width: 768px) {
    p {
      text-align: center;
    }
  }
`;
