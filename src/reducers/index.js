import {combineReducers} from 'redux';
import BookReducer from './reducer_books'
import CryptoDataReducer from './reducer_cryptodata'

const rootReducer = combineReducers({
    books: BookReducer,
    cryptodata:CryptoDataReducer

})

export default rootReducer;