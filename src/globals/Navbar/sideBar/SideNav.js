import React from "react";
import styled from "styled-components";

import { Links } from "../../../components/styledComponents";

export default function SideNav() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const changeRoute = () => {
    window.location = "/";
  };

  return (
    <Wrapper>
      <div className="menu-btn" onClick={handleClick}>
        <span
          className={open ? "menu-btn_burger open" : "menu-btn_burger"}
        ></span>
      </div>
      <div>
        <h2 onClick={changeRoute}>Coin</h2>
        {open && (
          <div className={open ? "aside" : "aside open"}>
            <Links sidenav="true">
              <li onClick={handleClick}>
                <a
                  href={
                    window.location.pathname === "/add"
                      ? "/#currencies"
                      : "#currencies"
                  }
                >
                  Available Currencies
                </a>
              </li>
            </Links>
            <Links sidenav="true">
              <li onClick={handleClick}>
                <a href="/add">Add currency</a>
              </li>
              <li onClick={handleClick}>
                <a href="https://israel-force.github.io/cv-web">About us</a>
              </li>
              <li onClick={handleClick}>
                <a href="https://israel-force.github.io/cv-web">Contact us</a>
              </li>
            </Links>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0.8rem 3rem;
  color: #fff;
  @media only screen and (min-width: 768px) {
    display: none;
  }
  h2 {
    margin-left: 0.6rem;
    font-family: "AvatarNormal";
  }
  .aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.98;
    height: 100vh;
    z-index: 2;
    background: #0197f6;
    transform: translateY(0);
    transition: all 0.5s ease-in-out;
    padding: 6rem 2rem;
  }
  .menu-btn {
    position: absolute;
    z-index: 3;
    left: 0.5rem;
    top: 2.5%;
    height: 20px;
    width: 28px;
    cursor: pointer;

    .menu-btn_burger {
      position: absolute;
      right: 0;
      top: 0.5rem;
      width: 25px;
      height: 2px;
      background: #fff;
      transition: all 0.5s ease-in-out;

      &::before {
        content: "";
        position: absolute;
        top: -8px;
        width: 25px;
        height: 2px;
        background: #fff;
        transition: all 0.5s ease-in-out;
      }

      &::after {
        content: "";
        position: absolute;
        top: 8px;
        width: 18px;
        height: 2px;
        background: #fff;
        transition: all 0.5s ease-in-out;
      }
      &.open {
        transform: rotate(360deg);
        background: transparent;

        &::before {
          transform: rotate(45deg) translate(5px, 8px);
        }

        &::after {
          width: 25px;
          transform: rotate(-45deg) translate(3px, -7px);
        }
      }
    }
  }
`;
