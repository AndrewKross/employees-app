import { ActionType } from './reducer/reducer'
import { FilterType, SortType } from './const'

export type FilterTypes = typeof FilterType.DRIVER | typeof FilterType.WAITER |
  typeof FilterType.COOK | typeof FilterType.NONE
export type SortTypes = typeof SortType.NAME | typeof SortType.BIRTHDAY

export type EmployeeData = {
  id: number
  name: string
  isArchive: boolean
  role: string
  phone: string
  birthday: string
}

export type State = {
  employeesData: EmployeeData[] | []
  sortType: SortTypes
  filterType: FilterTypes
  isArchiveFilter: boolean
}

interface loadEmployeesAction {
  type: typeof ActionType.LOAD_EMPLOYEES,
  payload: EmployeeData[],
}

interface changeSortTypeAction {
  type: typeof ActionType.CHANGE_SORT_TYPE,
  payload: SortTypes,
}

interface changeFilterTypeAction {
  type: typeof ActionType.CHANGE_FILTER_TYPE,
  payload: FilterTypes,
}

interface changeIsArchiveFilterAction {
  type: typeof ActionType.CHANGE_IS_ARCHIVE_FILTER,
  payload: boolean,
}

interface editEmployeeAction {
  type: typeof ActionType.EDIT_EMPLOYEE,
  payload: EmployeeData,
}

interface addNewEmployeeAction {
  type: typeof ActionType.ADD_NEW_EMPLOYEE,
  payload: EmployeeData,
}

export type ActionTypes = loadEmployeesAction | changeSortTypeAction | changeFilterTypeAction |
  changeIsArchiveFilterAction | editEmployeeAction | addNewEmployeeAction
