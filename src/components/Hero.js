import React from 'react';
import styled from 'styled-components';
import heroImg1 from '../assets/hero-1.svg';
import { BiFace, BiPhoneCall } from 'react-icons/bi';
import { FaDesktop } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import FormWithBtns from './FormWithBtns';

const Hero = () => {
  const btnData = [
    'Javascript',
    'Typescript',
    'ReactJs',
    'NextJs',
    'CSS',
    'SASS',
    'NodeJs',
    'ExpressJs',
    'NestJs',
    'MongoDB',
    'SQL',
    'Docker',
    'Kubernetes',
    'Microservices',
  ];
  return (
    <Wrapper>
      <div className='hero-center'>
        <div className='hero-title'>
          <div className='tag'>
            <h4>
              Josemaria Okwuosa{' '}
              <span>
                <BiFace />
              </span>
            </h4>
            <h5>
              Full Stack Engineer(Javascript)
              <span>
                <FaDesktop />
              </span>
            </h5>
            <div className='title-bottom'>
              {' '}
              <h5>
                Phone : +2348069219247
                <span>
                  <BiPhoneCall />
                </span>
              </h5>
              <h5 className='email'>
                Email : okwuosaifechidelu@gmail.com
                <span>
                  <AiOutlineMail />
                </span>
              </h5>
            </div>
          </div>
          <p className='details'>
            Accomplished, multi-faceted web engineer with a history of elegant
            performance in roles requiring exceptional strengths in application
            planning, execution, and extensive monitoring. Recognized throughout
            career for a professional, noteworthy engineering style that results
            in high levels of productivity, clean and optimized codebase
            efficiency, and team cohesion around a shared vision, hence creating
            the environments needed for the best work. Highly effective
            communication and leadership skills, in addition to extensive
            strengths in collaborating across organizational boundaries and
            providing critical data, reports, and recommendations to senior
            leadership teams.
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
        <div className='hero-left'>
          <div>
            <FormWithBtns btnData={btnData} buttonsLabel='Skill Set' />
          </div>
          <img
            src={heroImg1}
            alt='web development'
            className='img'
            height={400}
          />
        </div>
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
  padding: 2rem;

  img {
    display: none;
  }
  .hero-center {
    width: 90vw;
    max-width: var(--max-width);
    .hero-left {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
    }
    .details {
      font-size: 1rem;
    }
  }
  .tag {
    background: var(--grey-200);
    border-radius: var(--borderRadius);
    margin-top: 1.5rem;
    padding: 1rem;

    .email {
      text-transform: lowercase;
    }

    .title-bottom {
      /* display: flex;
      justify-content: space-between; */
    }
  }
  .tag h4 {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
  .tag h5 {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: normal;
  }
  @media (min-width: 992px) {
    min-height: 60vh;

    .hero-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;
      gap: 2rem;
      .hero-left {
        gap: 2rem;
      }
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
