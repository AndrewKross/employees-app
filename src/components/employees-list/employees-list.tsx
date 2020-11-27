import React from 'react';

const EmployeesList = () => {
  return (
    <section className="employees-section">
        <table className="employees">
          <thead>
            <tr>
              <td>Name</td>
              <td>Role</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="employees__name">Ivan Petrov</td>
              <td className="employees__role">Driver</td>
              <td className="employees__phone">+79201040905</td>
            </tr>
            <tr>
              <td className="employees__name">Andrew Kross</td>
              <td className="employees__role">Programmesssssssssssssr</td>
              <td className="employees__phone">+79201040905</td>
            </tr>
          </tbody>
        </table>
      </section>
  )
}

export default EmployeesList