import React from 'react';
import EmployeesList from '../employees-list/employees-list';
import './App.css';

const App = () => {
  return (
    <>
    <header>
      <h1>Employee App</h1>
    </header>
    <main>
      <section className="list-controls">
        <h2>Controls</h2>
      </section>
      <EmployeesList />
    </main>
    </>
  );
}

export default App;
