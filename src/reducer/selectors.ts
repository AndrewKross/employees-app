import { createSelector } from 'reselect'
import { filterEmployeesData, sortEmployeesData } from '../utils'
import { State } from "../types"

export const getEmployeesData = (state: State) => state.employeesData
export const getFilterType = (state: State) => state.filterType
export const getSortType = (state: State) => state.sortType
export const getIsArchiveFilter = (state: State) => state.isArchiveFilter

export const getFilteredEmployeesData = createSelector(
  getEmployeesData,
  getFilterType,
  getIsArchiveFilter,
  (data, filter, isArchive) => {
    return filterEmployeesData(data, filter, isArchive)
  },
)

export const getSortedEmployeesData = createSelector(
  getFilteredEmployeesData,
  getSortType,
  (data, sortType) => {
    return sortEmployeesData(data, sortType)
  },
)
