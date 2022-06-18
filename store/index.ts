import {combineReducers} from "redux";
import todo from './todo'
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import {TypedUseSelectorHook, useSelector as useReduxSelector,} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    todo: todo.reducer,
})

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    }
    return rootReducer(state, action);
}

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore = () => {
    return configureStore({
        reducer,
        devTools: true,
    })
}


export const wrapper = createWrapper(initStore);