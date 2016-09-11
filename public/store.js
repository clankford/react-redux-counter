import { createStore } from 'redux';
// Redux Reducers
import reducer from './reducers/reducer';

const store = createStore(reducer);

export default store;
