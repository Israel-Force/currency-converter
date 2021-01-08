import React from "react";
import styled from "styled-components";

import Toolbar from "./Toolbar/Toolbar";
import SideNav from "./sideBar/SideNav";

export default function Navbar(props) {
  return (
    <Wrapper>
      <SideNav />
      <Toolbar props={props} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${window.location.pathname === "/" ? "transparent" : "#0197f6"};
`;
