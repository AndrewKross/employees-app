import React from 'react';
import { connect } from 'react-redux';
import { EmployeeData, State } from "../../types";
import { AppRoute, FilterType, SortType } from "../../const";
import { withRouter } from 'react-router-dom';
import { Table } from 'antd';

type Props = {
  employeesData: EmployeeData[]
  sortType: string
  filterType: string
  isArchiveFilter: boolean
  history: any
}

const EmployeesList = ({ employeesData, sortType, filterType, isArchiveFilter, history }: Props) => {
  let filteredEmployeeData = [...employeesData]

  if (filterType !== FilterType.NONE) {
    filteredEmployeeData = filteredEmployeeData.filter((it) => {
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
    filteredEmployeeData = filteredEmployeeData.filter((it) => it.isArchive)
  }

  filteredEmployeeData.sort((a, b) => {
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

  const columns = [
    {
      title: `Имя`,
      dataIndex: `name`,
      key: `name`,
    }, {
      title: `Должность`,
      dataIndex: `role`,
      key: `role`,
    }, {
      title: `Телефон`,
      dataIndex: `phone`,
      key: `phone`,
    },
  ]

  return (
    <section className="employees-section">
      <Table columns={columns} dataSource={filteredEmployeeData} style={{ cursor: `pointer` }} tableLayout="fixed"
             rowKey={(record) => record.id} onRow={(record) => {
        return {
          onClick: () => {
            history.push(`${AppRoute.EMPLOYEE_PAGE + record.id}`)
          },
        };
      }}/>
    </section>
  )
}

const mapStateToProps = (state: State) => ({
  employeesData: state.employeesData,
  sortType: state.sortType,
  filterType: state.filterType,
  isArchiveFilter: state.isArchiveFilter,
})

export default withRouter(connect(mapStateToProps)(EmployeesList))
