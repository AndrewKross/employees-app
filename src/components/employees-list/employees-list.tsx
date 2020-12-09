import React from 'react'
import { connect } from 'react-redux'
import { EmployeeData, State } from "../../types"
import { AppRoute } from "../../const"
import { withRouter } from 'react-router-dom'
import { Table } from 'antd'
import { getSortedEmployeesData } from "../../reducer/selectors"

type Props = {
  employeesData: EmployeeData[]
  history: any
}

const EmployeesList = ({ employeesData, history }: Props) => {

  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Должность',
      dataIndex: 'role',
      key: 'role',
    }, {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
    },
  ]

  return (
    <section className="employees-section">
      <Table columns={columns} dataSource={employeesData} style={{ cursor: 'pointer' }} tableLayout="fixed"
             rowKey={(record) => record.id} onRow={(record) => {
        return {
          onClick: () => {
            history.push(`${AppRoute.EMPLOYEE_PAGE + record.id}`)
          },
        }
      }}/>
    </section>
  )
}

const mapStateToProps = (state: State) => ({
  employeesData: getSortedEmployeesData(state),
})

export default withRouter(connect(mapStateToProps)(EmployeesList))
