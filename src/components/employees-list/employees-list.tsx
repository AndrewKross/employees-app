import React, {useState} from 'react';
import {EmployeesData} from "../../types";
import {SortType} from "../../const";

type Props = {
  employeesData: EmployeesData[]
  sortType: string
}

const EmployeesList: React.FunctionComponent<Props> = ({employeesData, sortType}: Props) => {
  return (
    <section className="employees-section">
        <table className="employees">
          <thead>
            <tr>
              <td>Имя</td>
              <td>Должность</td>
              <td>Телефон</td>
            </tr>
          </thead>
          <tbody>
          {employeesData.sort((a, b) => {
            switch (sortType) {
              case SortType.NAME:
                return a.name > b.name ? 1 : -1
              case SortType.BIRTHDAY:
                const dateA = a.birthday.split(`.`).reverse().join(`.`)
                const dateB = b.birthday.split(`.`).reverse().join(`.`)
                return Date.parse(dateA) > Date.parse(dateB) ? 1 : -1
              default:
                 return a.name > b.name ? 1 : -1
            }
          }).map((it) => (
             <tr className="employees__field" key={it.id}>
               <td className="employees__name">{it.name}</td>
               <td className="employees__role">{it.role}</td>
               <td className="employees__phone">{it.phone}</td>
             </tr>
          ))}
          </tbody>
        </table>
      </section>
  )
}

export default EmployeesList
