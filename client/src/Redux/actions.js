// Importa los tipos de acción necesarios
import {FILTER_BY_NAME, FILTER_BY_CATEGORY, SEARCH_BY_NAME} from './actionsTypes';


// Acción para filtrar por nombre
export const filterByName = (name) => {
  return {
    type: FILTER_BY_NAME,
    payload: name
  };
};

export const filterByCategory = (category) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category
  };
}

export const searchByName = (name) => {
  return {
    type: SEARCH_BY_NAME,
    payload: name
  };
}