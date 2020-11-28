import React, {useState} from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import {EmployeeData, State} from "../../types";
import {FilterType} from "../../const";
import {ActionCreator} from "../../reducer";

type Props = {
   employeeId: string
   employeesData: EmployeeData[]
   saveEmployee: (data: EmployeeData[]) => void
   history: any
}

const EmployeePage = ({employeeId, employeesData, saveEmployee, history}: Props) => {
   const newEmployee = {
      id: employeesData[employeesData.length - 1].id + 1,
      name: `Name`,
      phone: `Phone`,
      birthday: `01.01.2000`,
      role: `driver`,
      isArchive: false,
   }

   const saveDataHandler = (evt: any) => {
      evt.preventDefault()
      const newEmployeesData = [...employeesData]

      if (employeeId !== `new`) {
         const employeeIndex = employeesData.findIndex((it) => it.id === +employeeId)
         console.log(employeeIndex)
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

   return (
   <>
   <header>
      <h1>Карточка сотрудника</h1>
   </header>
   <section className="employee-page">
      <form className="employee-form">
         <label htmlFor="employee-name-input">Имя: </label>
         <input type="text" id="employee-name-input" value={employeeData.name} required
                onChange={(evt) => setEmployeeData({...employeeData, name: evt.target.value})}/>
         <label htmlFor="employee-phone-input">Телефон: </label>
         <input type="tel" id="employee-phone-input" value={employeeData.phone} required
                onChange={(evt) => setEmployeeData({...employeeData, phone: evt.target.value})}/>
         <label htmlFor="employee-birthday-input">Дата рождения: </label>
         <input type="text" id="employee-birthday-input" value={employeeData.birthday}
                pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}" maxLength={10} required
                onChange={(evt) => setEmployeeData({...employeeData, birthday: evt.target.value})}/>
         <label>Должность: </label>
         <select value={employeeData.role}
                onChange={(evt) => setEmployeeData({...employeeData, role: evt.target.value})}>
            <option value={FilterType.COOK}>Повар</option>
            <option value={FilterType.WAITER}>Официант</option>
            <option value={FilterType.DRIVER}>Водитель</option>
         </select>
         <label htmlFor="employee-archive-input">В архиве? </label>
         <input type="checkbox" id="employee-archive-input" checked={employeeData.isArchive}
                onChange={(evt) => setEmployeeData({...employeeData, isArchive: evt.target.checked})}/>
         <input type="submit" value="Сохранить" onClick={saveDataHandler}/>
      </form>
   </section>
   </>
   )}

const mapStateToProps = (state: State) => ({
   employeesData: state.employeesData
})

const mapDispatchToProps = (dispatch: any) => ({
   saveEmployee(data: EmployeeData[]) {
      dispatch(ActionCreator.loadEmployees(data))
   }
})

// @ts-ignore
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeePage))
