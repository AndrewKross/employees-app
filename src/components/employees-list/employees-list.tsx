import React from 'react';
import { connect } from 'react-redux';
import {EmployeesData, State} from "../../types";
import {FilterType, SortType} from "../../const";

type Props = {
  employeesData: EmployeesData[]
  sortType: string
  filterType: string
  isArchiveFilter: boolean
}

const EmployeesList = ({employeesData, sortType, filterType, isArchiveFilter}: Props) => {
  let filteredEmployeesData = [...employeesData]

  if (filterType !== FilterType.NONE) {
    filteredEmployeesData = filteredEmployeesData.filter((it) => {
      switch (filterType) {
        case FilterType.DRIVER:
          return it.role === FilterType.DRIVER
        case FilterType.WAITER:
          return it.role === FilterType.WAITER
        case FilterType.COOK:
          return it.role === FilterType.COOK
        default:
          return true
      }
    })
  }

  if (isArchiveFilter) {
    filteredEmployeesData = filteredEmployeesData.filter((it) => it.isArchive)
  }

  filteredEmployeesData.sort((a, b) => {
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
  })

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
          {filteredEmployeesData.map((it) => (
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

const mapStateToProps = (state: State) => ({
  employeesData: state.employeesData,
  sortType: state.sortType,
  filterType: state.filterType,
  isArchiveFilter: state.isArchiveFilter,
})

export default connect(mapStateToProps)(EmployeesList)
