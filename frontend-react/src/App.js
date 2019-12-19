/**
 *  File: App.js
 *  Author: Bach Tran
 *  License: GPL-3.0
 */
import React from 'react';
import './App.css';
import Skeleton from "./components/Skeleton";

function App() {
  return (
      <div className="App">
        <header>
          <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossOrigin="anonymous"
          />
        </header>
      <Skeleton />
      </div>
  );
}

export default App;
