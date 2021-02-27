import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as form_reducer} from 'redux-form';
import thunk from 'redux-thunk';
import find_reducer from './reducers/find_reducer';

let reducers = combineReducers({
    form : form_reducer,
    find : find_reducer
})

let store = createStore(reducers,applyMiddleware(thunk))

export default store
