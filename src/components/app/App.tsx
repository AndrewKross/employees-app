import React, {useState} from 'react';
import EmployeesList from '../employees-list/employees-list';
import {EmployeesData} from "../../types";
import './App.css';
import {SortType} from "../../const";

type Props = {
  employeesData: EmployeesData[]
}

const App: React.FunctionComponent<Props> = ({employeesData}: Props) => {
  const [sortType, setSortType] = useState(SortType.NAME)
  return (
    <>
    <header>
      <h1>Employee App</h1>
    </header>
    <main>
      <section className="controls">
        <h2>Controls</h2>
        <div className="controls__sorting">
          <p>Сортировать по:</p>
          <input type="radio" name="sortInput" id="sortInput-1" defaultChecked onChange={() => setSortType(SortType.NAME)}/>
          <label htmlFor="sortInput-1">Имени</label>
          <input type="radio" name="sortInput" id="sortInput-2" onChange={() => setSortType(SortType.BIRTHDAY)}/>
          <label htmlFor="sortInput-2">Дате рождения</label>
        </div>
        <div className="controls__filters">
          <p>Фильтровать по:</p>
          <p>Должности</p>
          <select>
            <option>Повар</option>
            <option>Официант</option>
            <option>Водитель</option>
          </select>
          <input type="checkbox" id="archiveFilter"/>
          <label htmlFor="archiveFilter">В архиве</label>
        </div>
      </section>
      <EmployeesList employeesData={employeesData} sortType={sortType} />
    </main>
    </>
  );
}

export default App;
