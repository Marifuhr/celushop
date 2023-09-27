// Importa el tipo de acción necesario
import { FILTER_BY_NAME, FILTER_BY_CATEGORY, SEARCH_BY_NAME} from './actionsTypes';


// Estado inicial
const initialState = {
  filterByName: '',
  filterCategory: '',
  searchByName: '', // Nombre del filtro inicialmente vacío
};

// Reducer para manejar la acción de filtrar por nombre

 const filterByName = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterName: action.payload
      };
    default:
      return state;
  }
};

const filterCategory = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filterCategory: action.payload
      };
    default:
      return state;
  }
};

const searchByName = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BY_NAME:
      return {
        ...state,
        searchByName: action.payload
      };
    default:
      return state;
  }
}

module.exports = {
  filterByName,
  filterCategory,
  searchByName
}

