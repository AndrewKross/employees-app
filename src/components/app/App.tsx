import React from 'react';
import { connect } from 'react-redux';
import EmployeesList from '../employees-list/employees-list';
import Controls from '../controls/controls'
import {EmployeesData, State} from "../../types";
import './App.css';

type Props = {
  employeesData: EmployeesData[]
  sortType: string
}

const App: React.FunctionComponent<Props> = ({employeesData, sortType}: Props) => {
  return (
    <>
    <header>
      <h1>Employee App</h1>
    </header>
    <main>
      <Controls />
      <EmployeesList employeesData={employeesData} sortType={sortType} />
    </main>
    </>
  );
}

const mapStateToProps = (state: State) => ({
  employeesData: state.employeesData,
  sortType: state.sortType,
})

export default connect(mapStateToProps)(App);
