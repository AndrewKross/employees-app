import { ActionTypes, EmployeeData, State } from "../types";
import { FilterType, SortType } from "../const";

const initialState = {
  employeesData: [],
  sortType: SortType.NAME,
  filterType: FilterType.NONE,
  isArchiveFilter: false,
}

const ActionType = {
  LOAD_EMPLOYEES: 'LOAD_EMPLOYEES',
  CHANGE_SORT_TYPE: 'CHANGE_SORT_TYPE',
  CHANGE_FILTER_TYPE: 'CHANGE_FILTER_TYPE',
  CHANGE_IS_ARCHIVE_FILTER: 'CHANGE_IS_ARCHIVE_FILTER',
  EDIT_EMPLOYEE: 'EDIT_EMPLOYEE',
  ADD_NEW_EMPLOYEE: 'ADD_NEW_EMPLOYEE',
}

const ActionCreator = {
  loadEmployees: (data: EmployeeData[]): ActionTypes => ({
    type: ActionType.LOAD_EMPLOYEES,
    payload: data,
  }),
  changeSortType: (type: string): ActionTypes => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: type,
  }),
  changeFilterType: (type: string): ActionTypes => ({
    type: ActionType.CHANGE_FILTER_TYPE,
    payload: type,
  }),
  changeIsArchiveFilter: (isChecked: boolean): ActionTypes => ({
    type: ActionType.CHANGE_IS_ARCHIVE_FILTER,
    payload: isChecked,
  }),
  editEmployee: (employeeData: EmployeeData): ActionTypes => ({
    type: ActionType.EDIT_EMPLOYEE,
    payload: employeeData,
  }),
  addNewEmployee: (employeeData: EmployeeData): ActionTypes => ({
    type: ActionType.ADD_NEW_EMPLOYEE,
    payload: employeeData,
  })
}

const reducer = (state: State = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case ActionType.LOAD_EMPLOYEES:
      return {
        ...state,
        employeesData: action.payload,
      } as State
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload
      } as State
    case ActionType.CHANGE_FILTER_TYPE:
      return {
        ...state,
        filterType: action.payload
      } as State
    case ActionType.CHANGE_IS_ARCHIVE_FILTER:
      return {
        ...state,
        isArchiveFilter: action.payload,
      } as State
    case ActionType.EDIT_EMPLOYEE:
      const { id } = action.payload as EmployeeData;
      const index = state.employeesData.findIndex((it) => it.id === id)
      const dataWithEditedEmployee = [...state.employeesData]
      dataWithEditedEmployee[index] = action.payload as EmployeeData
      return {
        ...state,
        employeesData: dataWithEditedEmployee,
      } as State
    case ActionType.ADD_NEW_EMPLOYEE:
      const dataWithNewEmployee = [...state.employeesData]
      dataWithNewEmployee.push(action.payload as EmployeeData)
      return {
        ...state,
        employeesData: dataWithNewEmployee,
      }
    default:
      return { ...state }
  }
}

export { reducer, ActionCreator, ActionType }
