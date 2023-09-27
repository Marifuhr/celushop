import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../Redux/actions';

function Home({ filterByName }) {
  const handleFilterChange = (e) => {
    const name = e.target.value;
    filterByName(name);
  };

  return (
    <div>
      <h1>Hola Celushop!!</h1>
      <input type="text" value={filterByName} onChange={handleFilterChange} placeholder="Filtrar por nombre" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filterByName: state.filterByName
  };
};

export default connect(mapStateToProps, { filterByName })(Home);