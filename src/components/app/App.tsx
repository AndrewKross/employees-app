import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { AppRoute } from '../../const'
import 'antd/dist/antd.css';
import MainPage from "../main-page/main-page";
import EmployeePage from "../employee-page/employee-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={MainPage}/>
        <Route exact path={`${AppRoute.EMPLOYEE_PAGE}:id`}
               render={({ match, history }) => {
                 console.log(`Выполнен переход на страницу редактирования сотрудника с id ${match.params.id}`)
                 return <EmployeePage employeeId={match.params.id} history={history}/>
               }}/>
        <Route render={() => (
          <React.Fragment>
            {console.error('Выполнен переход на несуществующий маршрут')}
            <h1>Ошибка: 404. Страница не найдена.</h1>
            <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
          </React.Fragment>
        )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
