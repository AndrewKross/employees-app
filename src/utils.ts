import { FilterType, SortType } from "./const"
import { EmployeeData, FilterTypes, SortTypes } from "./types"

export const filterEmployeesData = (
  employeesData: EmployeeData[], filterType: FilterTypes, isArchiveFilter: boolean,
) => {
  const filteredEmployeesData = filterType === FilterType.NONE ? employeesData
    : employeesData.filter((it) => it.role === filterType)

  return isArchiveFilter ? filteredEmployeesData.filter((it) => it.isArchive)
    : filteredEmployeesData
}

export const sortEmployeesData = (employeesData: EmployeeData[], sortType: SortTypes) => {
  return [...employeesData].sort((a, b) => {
    switch (sortType) {
      case SortType.NAME:
        return a.name > b.name ? 1 : -1
      case SortType.BIRTHDAY:
        const dateA = a.birthday.split('.').reverse().join('.')
        const dateB = b.birthday.split('.').reverse().join('.')
        return Date.parse(dateA) > Date.parse(dateB) ? 1 : -1
      default:
        return a.name > b.name ? 1 : -1
    }
  })
}

