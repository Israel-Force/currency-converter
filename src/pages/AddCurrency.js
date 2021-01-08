import React from 'react';
import styled from 'styled-components';

import Hero from '../globals/Hero';
import coin from '../assets/img/bg-2.png';
import { Button } from '../components/styledComponents';
import { Context } from '../context/Context';
import thumb from '../assets/img/thumb.png';

export default function AddCurrency() {
  const { dispatch } = React.useContext(Context);

  const [add, setAdd] = React.useState({
    code: '',
    toOneDollar: '',
  });

  const [thumbs, setThumbs] = React.useState(false);

  var codeValue;
  var numValue;
  React.useEffect(() => {
    codeValue = document.querySelector('#code');
    numValue = document.querySelector('#toOneDollar');
  }, [add]);

  const handleChange = (name, value) => {
    setAdd({ ...add, [name]: value });
  };

  const required = (field, reg, msg, err, e) => {
    if (field.value === '') {
      field.nextElementSibling.innerHTML = msg;
      e.preventDefault();
      return false;
    } else if (!reg.test(field.value)) {
      field.nextElementSibling.innerHTML = err;
      e.preventDefault();
      return false;
    } else {
      field.nextElementSibling.innerHTML = '';
      return true;
    }
  };

  const regularEx = {
    code: /^[a-zA-Z]{1,3}$/,
    num: /^[0-9|.]{1,50}$/,
  };

  var check1;
  var check2;
  const validate = (e) => {
    check1 = required(
      codeValue,
      regularEx.code,
      'This field cannot be left empty',
      'Code can only be letters and 3 characters long',
      e
    );
    check2 = required(
      numValue,
      regularEx.num,
      'This field cannot be left empty',
      'This field can only be numbers',
      e
    );
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(e);
    if (check1 && check2) {
      const { code, toOneDollar } = add;
      dispatch({
        type: 'UPDATE_DATA',
        payload: {
          code: code.toUpperCase(),
          toOneDollar,
        },
      });
      window.scroll(0, 0);
      setThumbs(true);
      setTimeout(() => {
        setThumbs(true);
        window.location = `https://israel-force.github.io${process.env.PUBLIC_URL}/#currencies`;
      }, 1000);
    } else {
      e.preventDefault();
    }
  };

  return (
    <div>
      <Hero>
        <IndexOne />
      </Hero>
      <form onSubmit={handleSubmit}>
        <IndexTwo add={add} handleChange={handleChange} />
        <IndexThree add={add} handleChange={handleChange} />
        <Button>ADD TO LIST</Button>
        {thumbs ? <Thumbs thumbs={thumbs} /> : null}
      </form>
    </div>
  );
}

const Thumbs = ({ thumbs }) => {
  return (
    <ThumbsUp>
      <figure className={thumbs ? 'clicked' : ''}>
        <img src={thumb} alt="thumb" />
      </figure>
    </ThumbsUp>
  );
};

const IndexThree = ({ add, handleChange }) => {
  return (
    <Wrapper clr="#fff">
      <figure>
        <img src={coin} alt="coin" />
      </figure>
      <div className="form-1">
        <h3>How Much is 1USD to {add.code.toUpperCase()}</h3>
        <input
          type="number"
          placeholder="e.g 387.5"
          name="toOneDollar"
          id="toOneDollar"
          value={add.toOneDollar}
          onChange={(e) => {
            handleChange(e.target.name, e.target.value);
          }}
        />
        <label htmlFor="toOneDollar"></label>
      </div>
    </Wrapper>
  );
};

const IndexTwo = ({ add, handleChange }) => {
  return (
    <Wrapper clr="#fff" add="true" dir="row-reverse">
      <figure>
        <img src={coin} alt="coin" />
      </figure>
      <div className="form-1">
        <h3>What Currency?</h3>
        <input
          type="text"
          placeholder="Currency Code e.g USD"
          name="code"
          id="code"
          value={add.code}
          onChange={(e) => {
            handleChange(e.target.name, e.target.value);
          }}
        />
        <label htmlFor="code"></label>
      </div>
    </Wrapper>
  );
};

const IndexOne = () => {
  return (
    <Wrapper hero="true">
      <figure>
        <img src={coin} alt="coin" />
      </figure>
      <div className="txt">
        <h1>Add Currency</h1>
        <h4>You can add a currency</h4>
        <h4>that is not on our list of currencies.</h4>
        <h4>Simply follow the guide below</h4>
      </div>
    </Wrapper>
  );
};

const ThumbsUp = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  z-index: 100;
  figure {
    width: 200px;
    margin: 200px auto;
    transform: translateY(-100);
    transition: all 0.5s ease-in-out;
    & .clicked {
      transform: translateY(0);
      transition: all 0.5s ease-in-out;
    }
    img {
      width: 100%;
    }
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${(props) => (props.hero ? 0 : '4rem 0')};
  background: ${(props) => (props.add ? props.clr : '#f7f7f7')};
  h1 {
    font-weight: bold;
    font-family: 'AvertaDemoPERegular';
    font-size: 1.8rem;
    color: #253031;
    margin-bottom: 0.4rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  .form-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  input {
    padding: 1rem 0.5rem;
    border-radius: 6px;
    margin-bottom: 0.5rem;
    display: block;
    width: 13rem;
    border: 1px solid #000;
    &:focus {
      outline: none;
    }
  }
  label {
    color: red;
    font-size: 0.9em;
  }
  h4 {
    font-weight: lighter;
  }
  figure {
    width: 50px;
    img {
      width: 100%;
    }
  }
  @media only screen and (min-width: 768px) {
    flex-direction: ${(props) => (props.add ? props.dir : 'row')};
    justify-content: center;
    align-items: center;
    text-align: left;
    figure {
      width: 100px !important;
      margin-right: ${(props) => (props.add ? '0' : '10rem')};
      margin-left: ${(props) => (props.add ? '10rem' : '0')};
      margin-top: ${(props) => (props.add ? props.mg : '0')};
    }
  }
`;
