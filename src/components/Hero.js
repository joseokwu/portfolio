import React from 'react';
import styled from 'styled-components';
import heroImg1 from '../assets/hero-1.svg';

const Hero = () => {
  return (
    <Wrapper>
      <div className='hero-center'>
        <div className='hero-title'>
          <div className='tag'>
            <h4>Name: Josemaria Okwuosa</h4>
            <h5>Skill: Full Stack Developer(Javascript)</h5>
          </div>
          <p>
            Projects are the most practical way to show skill. With
            <span> React, NodeJS, ExpressJS, MongoDB </span>and many others, I
            have built (and continue to build) quite a few projects to emphasize
            my capabilities. Feel free to view these interesting projects below.
          </p>
          <div className='links'>
            <a
              href='https://github.com/joseokwu'
              target='_blank'
              rel='noreferrer'
              className='btn hero-btn'
            >
              Visit My Github
            </a>
            <a
              href='mailto:okwuosaifechidelu@gmail.com'
              className='btn hero-btn'
            >
              Contact Me
            </a>
          </div>
        </div>
        <img src={heroImg1} alt='web development' className='img' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 40vh;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  img {
    display: none;
  }
  .hero-center {
    width: 90vw;
    max-width: var(--max-width);
  }
  .tag {
    background: var(--grey-200);
    border-radius: var(--borderRadius);
    margin-top: 1.5rem;
  }
  .tag h4 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.15rem;
  }
  .tag h5 {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: normal;
  }
  @media (min-width: 992px) {
    min-height: 60vh;

    .hero-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;
      gap: 2rem;
    }
    img {
      display: block;
    }
    .tag h4 {
      font-size: 1.563rem;
      letter-spacing: var(--letterSpacing);
    }
    .tag h5 {
      font-size: 1.25rem;
      letter-spacing: var(--letterSpacing);
    }
  }
  .hero-title h1 {
    color: var(--black-design);
    margin: 0;
  }
  .hero-title p {
    margin: 1rem 0;
    color: var(--grey-900);
    font-size: 1.25rem;
  }
  .hero-title span {
    letter-spacing: 2px;
    border-bottom: 2px solid var(--primary-design);
    margin: 0 0.5rem;
    text-align: center;
    text-align: center;
    line-height: 1.25;
    font-style: italic;
    font-weight: 900;
  }
  .hero-btn {
    display: inline-block;
    background: var(--primary-design);
    border: 2px solid var(--primary-design);
    color: var(--black-design);
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.75rem 1.25rem;
    box-shadow: var(--shadow-1);
    animation: bounce 2s infinite;
  }
  .links {
    display: flex;
    justify-content: space-between;
  }
  .hero-btn:hover {
    background: transparent;

    box-shadow: var(--shadow-2);
    color: var(--primary-design);
  }
`;

export default Hero;
