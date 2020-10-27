import React from "react";
import styled from "styled-components";

const Hero = ({ home, children }) => {
  return <Wrapper home={home}>{children}</Wrapper>;
};

const Wrapper = styled.section`
  height: ${(props) => (props.home ? "400px" : "210px")};
  background: ${(props) => (props.home ? "#0197f6" : "#f7f7f7")};
  margin-top: ${(props) => (props.home ? "-122px" : "0")};
 padding-top: ${(props) => (props.home ? "8rem" : "2rem")};
 h2{
  margin: 5rem 1rem 0;
  font-size: 1.1em;
  color: #fff;
  @media only screen and (min-width: 768px){ 
    margin-left: 4rem;
 }
`;

export default Hero;
