import {
createStore,
combineReducers
} from 'redux';

import {
reducer as postsReducer
} from './reducers/posts';
import {composeWithDevTools} from "redux-devtools-extension";


const reducers = combineReducers({
'posts' : postsReducer
})

export const store = createStore(reducers);