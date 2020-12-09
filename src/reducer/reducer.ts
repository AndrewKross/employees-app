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
    default:
      return { ...state }
  }
}

export { reducer, ActionCreator, ActionType }
