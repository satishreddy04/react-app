import {FETCH_CRYPTODATA} from '../actions/index';
import _ from 'lodash';

export default function (state=[],action){
    
        switch (action.type){
            case FETCH_CRYPTODATA:
            return action.payload;
    
        } 
        
        return state;
    }