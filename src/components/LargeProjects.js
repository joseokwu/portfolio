import Project from './Project';

const LargeProjects = ({ large_projects }) => {
  return (
    <>
      <div className='title'>
        <h2>Large Scale Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='section-center'>
        {large_projects.map((item, index) => {
          return <Project key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default LargeProjects;
