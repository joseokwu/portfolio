import styled from 'styled-components';
import Project from './Project';

const LargeProjects = ({ large_projects }) => {
  return (
    <>
      <Wrapper>
        <div className='title'>
          <h2>Projects</h2>
          <div className='title-underline'></div>
        </div>
        <div className='section-center'>
          {large_projects.map((item, index) => {
            return <Project key={index} {...item} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default LargeProjects;

const Wrapper = styled.div`
  margin-bottom: 3rem;
`;
