import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <BrowserRouter >
      <Main />
    </BrowserRouter>
  </>
);
