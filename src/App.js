import React from 'react';
import SavingsCard from './components/SavingsCard';
import ShiftCard from './components/ShiftCard';
import AddButton from './components/AddButton'
import './App.css';
import AddNew from './components/AddNew';

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <AddNew title="Savings Goal"/>
          <SavingsCard />
          <ShiftCard />
          <SavingsCard />
        </div>
      </div>
    </div>
  );
}

export default App;
