import React from 'react'
import {BrowserRouter} from 'react-router-dom' //для навигации по страницам
import AppRouter from './componets/AppRouter'

function App() {
  return (
    <BrowserRouter> 
     <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
