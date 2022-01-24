import Project from './Project';

const RegularProjects = ({ regular_projects }) => {
  return (
    <>
      <div className='title'>
        <h2>Regular Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='section-center'>
        {regular_projects.map((item, index) => {
          return <Project key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default RegularProjects;
