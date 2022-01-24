import menu from '../assets/menu';

const Menu = ({ changePortfolio, state }) => {
  return (
    <>
      <div className='title'>
        <h2>Select Portfolio</h2>
        <div className='title-underline'></div>
      </div>
      <section className='btn-container'>
        {menu.map((item, index) => {
          const { name, value } = item;
          return (
            <button
              className={`filter-btn ${state === value && 'active'}`}
              key={index}
              onClick={() => changePortfolio(value)}
            >
              {name}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default Menu;
