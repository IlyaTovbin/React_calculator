import React from 'react';
import Title from './components/Title/Title';
import Calculator from './components/Calculator/Calculator';
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-xl-6">
          <Title />
        </div>
        <div className="col-12 col-xl-6">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
