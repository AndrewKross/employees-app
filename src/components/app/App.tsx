import React from 'react';
import EmployeesList from '../employees-list/employees-list';
import Controls from '../controls/controls'
import './App.css';

const App = () => {
  return (
    <>
    <header>
      <h1>Employees App</h1>
    </header>
    <main>
      <Controls />
      <EmployeesList />
    </main>
    </>
  );
}

export default App;
