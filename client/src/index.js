import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ListStore from './store/ListStore';
import UserStore from './store/UserStore';

//закидываем состояние за которым следит mobx в приложение
export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    userlist: new ListStore()
  }}>
      <App />
</Context.Provider>,
  document.getElementById('root')
);


