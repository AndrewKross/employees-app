import React, { useState } from "react";
import { connect } from "react-redux";
import MaskedInput from 'antd-mask-input'
import moment from "moment";
import {Input, Select, Checkbox, Button, DatePicker} from 'antd';
import { EmployeeData, State } from "../../types";
import { AppRoute, FilterType } from "../../const";
import { ActionCreator } from "../../reducer";
import { Link } from "react-router-dom";
import "./employee-page.scss"

const { Option } = Select
const dateFormat = `DD.MM.YYYY`

type Props = {
  employeeId: string
  employeesData: EmployeeData[]
  saveEmployee: (data: EmployeeData[]) => void
  history: any
}

const EmployeePage = ({ employeeId, employeesData, saveEmployee, history }: Props) => {
  const newEmployee = {
    id: employeesData[employeesData.length - 1].id + 1,
    name: `Name`,
    phone: `Phone`,
    birthday: `01.01.2000`,
    role: `driver`,
    isArchive: false,
  }

  const formSubmitHandler = (evt: any) => {
    evt.preventDefault()
    const newEmployeesData = [...employeesData]

    if (employeeId !== `new`) {
      const employeeIndex = employeesData.findIndex((it) => it.id === +employeeId)
      newEmployeesData[employeeIndex] = employeeData
    } else {
      newEmployeesData.push(employeeData)
    }

    saveEmployee(newEmployeesData)
    history.goBack()
  }

  let selectedEmployee = newEmployee

  if (employeeId !== `new`) {
    selectedEmployee = employeesData.find((data) => data.id === +employeeId)!
  }

  const [employeeData, setEmployeeData] = useState(selectedEmployee)

  return selectedEmployee ? (
    <>
      <header>
        <h1 className="employee-card-header">Карточка сотрудника</h1>
      </header>
      <section className="employee-page">
        <form className="employee-form" onSubmit={formSubmitHandler}>
          <div className="name-input-wrapper employee-form__wrapper">
            <label className="name-input-label" htmlFor="employee-name-input">Имя: </label>
            <Input className="name-input" type="text" id="employee-name-input" value={employeeData.name} required maxLength={30}
                   onChange={(evt) => setEmployeeData({ ...employeeData, name: evt.target.value })}/>
          </div>
          <div className="phone-input-wrapper employee-form__wrapper">
            <label className="phone-input-label" htmlFor="employee-phone-input">Телефон: </label>
            <MaskedInput type="tel" id="employee-phone-input" value={employeeData.phone} required
                         mask="+7 (111) 111-1111" pattern="^\+?\d\s(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$"
                         onChange={(evt) => setEmployeeData({ ...employeeData, phone: evt.target.value })}/>
          </div>
          <div className="birthday-input-wrapper employee-form__wrapper">
            <label htmlFor="employee-birthday-input">Дата рождения: </label>
            <DatePicker id="employee-birthday-input" defaultValue={moment(employeeData.birthday, dateFormat)} format={dateFormat}
                         onChange={(evt) => {
                           setEmployeeData({ ...employeeData, birthday: moment(evt).format(dateFormat) })
                         }}/>
          </div>
          <div className="role-input-wrapper employee-form__wrapper">
            <label>Должность: </label>
            <Select className="role-input" value={employeeData.role}
                    onChange={(evt) => setEmployeeData({ ...employeeData, role: evt.valueOf() })}>
              <Option value={FilterType.COOK}>Повар</Option>
              <Option value={FilterType.WAITER}>Официант</Option>
              <Option value={FilterType.DRIVER}>Водитель</Option>
            </Select>
          </div>
          <div className="archive-input-wrapper employee-form__wrapper">
            <label htmlFor="employee-archive-checkbox">В архиве? </label>
            <Checkbox id="employee-archive-checkbox" checked={employeeData.isArchive}
                   onChange={(evt) => setEmployeeData({ ...employeeData, isArchive: evt.target.checked })}/>
          </div>
          <Button className="employee-form__submit-btn" type="primary" htmlType="submit">Сохранить</Button>
          <Button className="employee-form__back-btn" type="primary" danger
                  onClick={() => history.push(AppRoute.MAIN)}>Вернуться назад без сохранения</Button>
        </form>
      </section>
    </>
  ) : (
    <div>
      <h1>Ошибка! Такого сотрудника нет в базе.</h1>
      <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  employeesData: state.employeesData
})

const mapDispatchToProps = (dispatch: any) => ({
  saveEmployee(data: EmployeeData[]) {
    dispatch(ActionCreator.loadEmployees(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage)
