import React, { useState } from 'react';
import styled from 'styled-components';
import {
  frontend_large_projects,
  frontend_regular_projects,
} from '../assets/frontend-mock';
import {
  backend_large_projects,
  backend_regular_projects,
} from '../assets/backend-mock';
import fullstack_projects from '../assets/fullstack-mock';
import LargeProjects from './LargeProjects';
import RegularProjects from './RegularProjects';
import Menu from './Menu';
const Projects = () => {
  const [state, setState] = useState('front-end');
  const [loading, setLoading] = useState();

  const changePortfolio = (id) => {
    setLoading(true);
    setState(id);
    setLoading(false);
  };

  if (loading) {
    return <div className='loading'></div>;
  }
  if (state === 'front-end') {
    return (
      <Wrapper>
        <Menu changePortfolio={changePortfolio} state={state} />
        <LargeProjects large_projects={frontend_large_projects} />
        <RegularProjects regular_projects={frontend_regular_projects} />
      </Wrapper>
    );
  }
  if (state === 'back-end') {
    return (
      <Wrapper>
        <Menu changePortfolio={changePortfolio} state={state} />
        <LargeProjects large_projects={backend_large_projects} />
        <RegularProjects regular_projects={backend_regular_projects} />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Menu changePortfolio={changePortfolio} state={state} />
      <LargeProjects large_projects={fullstack_projects} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;
  background: var(--grey-200);
  .title {
    text-align: center;
    margin-bottom: 3rem;
  }

  .title-underline {
    height: 0.2rem;
    width: 7rem;
    background: var(--primary-design);
    margin: 0 auto;
    margin-top: -1rem;
  }
  .section-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto 2rem auto;
    display: grid;
    gap: 3rem 2rem;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }
  .btn-container {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
  }
  .filter-btn {
    background: var(--primary-design);
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: var(--black-design);
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--radius);
    animation: bounce 2s infinite;
  }
  .filter-btn:hover {
    background: transparent;
    color: var(--primary-design);
  }
  .active {
    animation: none;
    background: var(--white);
    border-style: solid;
    border-color: var(--primary-design);
  }

  @media (min-width: 992px) {
    .center {
      width: 95vw;
    }
  }
`;
export default Projects;
