import React, { useReducer, useContext, createContext } from 'react';
import shopReducer from './components/reducer';

const Context = createContext();
export const { Provider } = Context;

const Store = ({ children }) => {
    const initialState = { products: [], cart: [] };
    const [state, dispatch] = useReducer(shopReducer, initialState);
    return <Provider value={{ state, dispatch }}>
        {children}
    </Provider>
}

export const useStore = () => useContext(Context);

export default Store;