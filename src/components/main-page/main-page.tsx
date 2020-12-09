import React from "react"
import Controls from "../controls/controls"
import EmployeesList from "../employees-list/employees-list"
import "./main-page.scss"

const MainPage = () => (
  <>
    <header>
      <h1 className="app-header">Employees App</h1>
    </header>
    <main>
      <Controls/>
      <EmployeesList/>
    </main>
  </>
)

export default MainPage
