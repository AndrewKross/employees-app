import React from "react";
import { connect } from "react-redux";
import {EmployeesData, State} from "../../types";

type Props = {
   id: string
   employeesData: EmployeesData[]
}

const EmployeePage = ({id, employeesData}: Props) => {
   const employeeData = employeesData.find((data) => data.id === +id)
   return (
   <section>
      <h1>Name:</h1>
      <h2>{employeeData!.name}</h2>
   </section>
)}

const mapStateToProps = (state: State) => ({
   employeesData: state.employeesData
})

export default connect(mapStateToProps)(EmployeePage)
