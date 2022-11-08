import React from 'react';
import styled from 'styled-components';
const Project = ({ name, image, url, git }) => {
  return (
    <>
      <Wrapper className='project' target='_blank' rel='noreferrer'>
        <img src={image} className='img' alt='project' />
        <footer>
          <h5>{name}</h5>
        </footer>
        <div className='view-container'>
          {url && <button onClick={() => window.open(url)}>View Live</button>}
          {git && (
            <button onClick={() => window.open(git)}>View Source Code</button>
          )}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  border-radius: var(--borderRadius);
  background: var(--white);
  box-shadow: var(--shadow-1);
  transition: var(--transition);

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-2);
  }
  .view-container {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    button {
      background-color: var(--primary-design);
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      &:hover {
        transform: scale(1.05);
        box-shadow: var(--shadow-2);
      }
    }
  }
  .img {
    width: 100%;
    display: block;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
    height: 15rem;
    object-fit: cover;
  }

  footer {
    text-align: center;
    padding: 1rem 1.25rem;
    background: var(--white);
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }
  footer h5 {
    margin-bottom: 0;
    color: var(--grey-900);
    font-weight: 500;
  }
`;

export default Project;
