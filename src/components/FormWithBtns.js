import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnOutline } from './BtnOutline';

const FormWithBtns = ({
  btnData,
  buttonsLabel,

  selectedOptions,
  setSelectedOptions,
}) => {
  const handleBtns = (btnName, e) => {
    e.preventDefault();
    const tempOptions = [...selectedOptions];
    if (tempOptions.includes(btnName)) {
      const index = tempOptions.indexOf(btnName);
      tempOptions.splice(index, 1);
      setSelectedOptions(tempOptions);
    } else {
      setSelectedOptions([...selectedOptions, btnName]);
    }
  };
  return (
    <Wrapper>
      <label htmlFor=''>{buttonsLabel}</label>
      <span className='career-buttons'>
        {btnData.map((btn, index) => {
          return (
            <BtnOutline
              title={btn}
              key={index}
              onClick={(e) => handleBtns(btn, e)}
              backgroundColor={
                selectedOptions?.includes(btn) ? 'rgba(242, 101, 34, 0.3)' : ''
              }
              borderColor={selectedOptions?.includes(btn) ? 'orange' : ''}
            />
          );
        })}
      </span>
    </Wrapper>
  );
};

export default FormWithBtns;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  .message-circle {
    position: absolute;
    bottom: 0;
    right: 0%;
  }
  textArea {
    border-radius: 12px;
    width: 80%;
    border: 1px solid #cccccc;
    margin-top: 1.5rem;
    padding: 2rem;

    :focus {
      outline: 1px solid orange;
    }
  }
  input {
    height: 4rem;
    border-radius: 12px;
    width: 80%;
    border: 1px solid #cccccc;
    margin-bottom: 1.5rem;
    padding: 0 1rem;

    :focus {
      outline: 1px solid orange;
    }
  }
  label {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: black;
    margin-left: auto;
    margin-right: auto;
  }
  .career-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .button {
    margin-top: 4rem;
  }

  @media only screen and (max-width: 440px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .career-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
