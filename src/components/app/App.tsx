import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {AppRoute} from '../../const'
import './App.css';
import MainPage from "../main-page/main-page";
import EmployeePage from "../employee-page/employee-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={MainPage}/>
        <Route exact path={`${AppRoute.EMPLOYEE_PAGE}:id`}
                render={({ match }) => {
                  // @ts-ignore
                   return <EmployeePage employeeId={match.params.id} />
                }}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
