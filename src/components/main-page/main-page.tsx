import React from "react";
import Controls from "../controls/controls";
import EmployeesList from "../employees-list/employees-list";

const MainPage = () => (
  <>
    <header>
      <h1>Employees App</h1>
    </header>
    <main>
      <Controls/>
      <EmployeesList/>
    </main>
  </>
)

export default MainPage
