import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Importa el rootReducer que combina todos los reducers de tu aplicación

// Crea la store de Redux
const store = createStore(

  applyMiddleware(thunk) // Aplicamos middleware, en este caso, el thunk
);

export default store;