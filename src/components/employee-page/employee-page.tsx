import React, { useState } from "react"
import { connect } from "react-redux"
import MaskedInput from 'antd-mask-input'
import { Button, Checkbox, Input, Select } from 'antd'
import { EmployeeData, State } from "../../types"
import { AppRoute, FilterType } from "../../const"
import { ActionCreator } from "../../reducer/reducer"
import { Link } from "react-router-dom"
import "./employee-page.scss"
import { getEmployeesData } from "../../reducer/selectors"
import { SelectValue } from "antd/es/select"
import { CheckboxChangeEvent } from "antd/es/checkbox"

const { Option } = Select

type Props = {
  employeeId: string
  employeesData: EmployeeData[]
  editEmployee: (data: EmployeeData) => void
  addNewEmployee: (data: EmployeeData) => void
  history: any
}

const EmployeePage = ({ employeeId, addNewEmployee, employeesData, editEmployee, history }: Props) => {
  const newEmployee: EmployeeData = {
    id: employeesData[employeesData.length - 1].id + 1,
    name: '',
    phone: '',
    birthday: '',
    role: FilterType.DRIVER,
    isArchive: false,
  }

  const formSubmitHandler = (evt: any) => {
    evt.preventDefault()

    if (employeeId === 'new') {
      addNewEmployee(employeeData)
      console.log(`Сотрудник с id ${employeeId} успешно сохранен!`)
    } else {
      editEmployee(employeeData)
      console.log(`Новый сотрудник успешно сохранен в базу! Ему присвоен id ${newEmployee.id}`)
    }

    history.push(AppRoute.MAIN)
  }

  let selectedEmployee = newEmployee
  let employeeInBase: EmployeeData | null = newEmployee
  if (employeeId !== 'new') {
    employeeInBase = employeesData.find((data) => data.id === +employeeId) || null
    selectedEmployee = employeeInBase || newEmployee
  }

  const [employeeData, setEmployeeData] = useState(selectedEmployee)

  const EmployeeHandlers = {
    nameChangeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
      setEmployeeData({
        ...employeeData,
        name: evt.target.value,
      })
    },
    phoneChangeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
      setEmployeeData({
        ...employeeData,
        phone: evt.target.value,
      })
    },
    birthdayChangeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
      setEmployeeData({
        ...employeeData,
        birthday: evt.target.value,
      })
    },
    roleChangeHandler(evt: SelectValue) {
      setEmployeeData({
        ...employeeData,
        role: evt.valueOf().toString(),
      })
    },
    isArchiveChangeHandler(evt: CheckboxChangeEvent) {
      setEmployeeData({
        ...employeeData,
        isArchive: evt.target.checked,
      })
    },
  }

  return employeeInBase ? (
    <>
      <header>
        <h1 className="employee-card-header">Карточка сотрудника</h1>
      </header>
      <section className="employee-page">
        <form className="employee-form" onSubmit={formSubmitHandler}>
          <div className="name-input-wrapper employee-form__wrapper">
            <label className="name-input-label" htmlFor="employee-name-input">Имя: </label>
            <Input className="name-input" type="text" id="employee-name-input" value={employeeData.name} required
                   maxLength={30} placeholder="Введите имя сотрудника" onChange={EmployeeHandlers.nameChangeHandler}/>
          </div>
          <div className="phone-input-wrapper employee-form__wrapper">
            <label className="phone-input-label" htmlFor="employee-phone-input">Телефон: </label>
            <MaskedInput type="tel" id="employee-phone-input" value={employeeData.phone} required
                         mask="+7 (111) 111-1111" pattern="^\+?\d\s(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$"
                         onChange={EmployeeHandlers.phoneChangeHandler}/>
          </div>
          <div className="birthday-input-wrapper employee-form__wrapper">
            <label htmlFor="employee-birthday-input">Дата рождения: </label>
            <MaskedInput type="text" id="employee-birthday-input" defaultValue={employeeData.birthday}
                         mask="11.11.1111" placeholder="ДД.ММ.ГГГГ" pattern="\d{2}\.\d{2}\.\d{4}" required
                         onChange={EmployeeHandlers.birthdayChangeHandler}/>
          </div>
          <div className="role-input-wrapper employee-form__wrapper">
            <label>Должность: </label>
            <Select className="role-input" defaultValue={employeeData.role}
                    onChange={EmployeeHandlers.roleChangeHandler}>
              <Option value={FilterType.COOK}>Повар</Option>
              <Option value={FilterType.WAITER}>Официант</Option>
              <Option value={FilterType.DRIVER}>Водитель</Option>
            </Select>
          </div>
          <div className="archive-input-wrapper employee-form__wrapper">
            <label htmlFor="employee-archive-checkbox">В архиве? </label>
            <Checkbox id="employee-archive-checkbox" checked={employeeData.isArchive}
                      onChange={EmployeeHandlers.isArchiveChangeHandler}/>
          </div>
          <Button className="employee-form__submit-btn" type="primary" htmlType="submit">Сохранить</Button>
          <Button className="employee-form__back-btn" type="primary" danger
                  onClick={() => history.push(AppRoute.MAIN)}>Вернуться назад без сохранения</Button>
        </form>
      </section>
    </>
  ) : (
    <div>
      {console.error('Выполнен переход на страницу несуществующего сотрудника (такого id нет в базе)')}
      <h1>Ошибка! Такого сотрудника нет в базе.</h1>
      <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  employeesData: getEmployeesData(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  editEmployee(data: EmployeeData) {
    dispatch(ActionCreator.editEmployee(data))
  },
  addNewEmployee(data: EmployeeData) {
    dispatch(ActionCreator.addNewEmployee(data))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage)
