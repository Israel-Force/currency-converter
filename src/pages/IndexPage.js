import React from 'react';
import styled from 'styled-components';

import Hero from '../globals/Hero';
import coin from '../assets/img/bg-2.png';
import { Context } from '../context/Context';
import { Button, Wrapper } from '../components/styledComponents';

export default function IndexPage() {
  const { state } = React.useContext(Context);

  const [cur, setCur] = React.useState({
    select1: { value: 'NGN' },
    select2: { value: 'USD' },
  });

  const [convert, setConvert] = React.useState({
    amt: 381.25,
    to: 1,
  });

  const handleChange = (name, value) => {
    setCur({ ...cur, [name]: { value } });
    setConvert({
      amt: 0,
      to: 0,
    });
  };

  const changeState = (value) => {
    setCur({ ...cur, select1: { value } });
    setConvert({
      amt: 0,
      to: 0,
    });
    window.scroll(0, 0);
  };

  const toUSD = (amt, cur) => {
    for (var i = 0; i <= state.length; i++) {
      var currency = state[i];
      if (currency.code === cur) {
        let usd;
        if (currency.code === 'USD') {
          usd = +amt;
        } else {
          usd = +amt / currency.toOneDollar;
        }
        return usd;
      }
    }
  };

  const toNewCur = (usd, cur) => {
    for (var i = 0; i <= state.length; i++) {
      var currency = state[i];
      if (currency.code === cur) {
        let val;
        if (currency.code === 'USD') {
          val = +usd;
        } else {
          val = +usd * currency.toOneDollar;
        }
        return val;
      }
    }
  };

  const handleInputChange = (name, value, id) => {
    setConvert({ ...convert, [name]: value });
    const check = id === 'input1' ? cur.select1.value : cur.select2.value;
    const destinationCheck =
      id === 'input1' ? cur.select2.value : cur.select1.value;
    const usdCalculation = toUSD(+value, check).toFixed(2);
    const conversion = toNewCur(usdCalculation, destinationCheck).toFixed(2);
    if (name === 'amt') {
      setConvert({ amt: value, to: conversion });
    } else {
      setConvert({ to: value, amt: conversion });
    }
  };

  const handleClick = () => {
    window.location = '/add';
  };

  return (
    <div>
      <Hero home="true">
        <h2>Converter</h2>
      </Hero>
      <div
        className="page-container"
        style={{ width: '90%', margin: '0 auto' }}
      >
        <IndexOne
          cur={cur}
          convert={convert}
          handleChange={handleChange}
          handleInputChange={handleInputChange}
        />
        <IndexTwo changeState={changeState} />
        <Button onClick={handleClick}>ADD CURrENCY</Button>
      </div>
    </div>
  );
}

const IndexOne = ({ cur, convert, handleChange, handleInputChange }) => {
  const { state } = React.useContext(Context);
  return (
    <Wrapper>
      <form>
        <div className="row row-1">
          <div className="col-1">
            <label htmlFor="amt">Amount</label>
            <input
              type="number"
              name="amt"
              placeholder="e.g 380"
              id="input1"
              value={convert.amt}
              onChange={(e) => {
                handleInputChange(e.target.name, e.target.value, e.target.id);
              }}
            />
          </div>
          <div className="col-2">
            <select
              value={cur.select1.value}
              name="select1"
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            >
              {state.map((cur, index) => {
                return (
                  <option value={cur.code} key={index}>
                    {cur.code}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row row-2"></div>
        <div className="row row-3">
          <div className="col-1">
            <label htmlFor="to">To</label>
            <input
              type="number"
              name="to"
              placeholder="e.g 1"
              id="input2"
              value={convert.to}
              onChange={(e) => {
                handleInputChange(e.target.name, e.target.value, e.target.id);
              }}
            />
          </div>
          <div className="col-2">
            <select
              value={cur.select2.value}
              name="select2"
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            >
              {state.map((cur, index) => {
                return (
                  <option value={cur.code} key={index}>
                    {cur.code}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

const IndexTwo = ({ changeState }) => {
  const { state } = React.useContext(Context);
  return (
    <IndexContainer id="currencies">
      {state.map((cur, index) => {
        return (
          <div
            className="box"
            key={index}
            onClick={(e) => {
              changeState(cur.code);
            }}
          >
            <figure>
              <img src={coin} alt="coin" />
            </figure>
            <p>{cur.code}</p>
          </div>
        );
      })}
    </IndexContainer>
  );
};

const IndexContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 2rem;
  margin: 3rem 0;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  figure {
    width: 40px;
    img {
      width: 100%;
    }
  }
  .box {
    background: #fff;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
