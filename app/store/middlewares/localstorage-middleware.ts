import { Action, Dispatch, isAction, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware: Middleware = ( state ) => {
    return (next) => (action) => {
        
        next(action);
        if ( isAction(action) && action.type === 'pokemons/toggleFavorite' ) {
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
            return;
        }
        // console.log({state: state.getState()});
    }


};




