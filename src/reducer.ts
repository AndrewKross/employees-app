import {EmployeesData} from "./types";
import {SortType, FilterType} from "./const";

const initialState = {
   employeesData: [],
   sortType: SortType.NAME,
   filterType: FilterType.DEFAULT,
}

const ActionType = {
   LOAD_EMPLOYEES: `LOAD_EMPLOYEES`,
   CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
   CHANGE_FILTER_TYPE: `CHANGE_FILTER_TYPE`,
}

const ActionCreator = {
   loadEmployees: (data: EmployeesData[]) => ({
      type: ActionType.LOAD_EMPLOYEES,
      payload: data,
   }),
   changeSortType: (type: string) => ({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: type
   }),
   changeFilterType: (type: string) => ({
      type: ActionType.CHANGE_FILTER_TYPE,
      payload: type
   }),
}

const reducer = (state = initialState, action: any) => {
   switch (action.type) {
      case ActionType.LOAD_EMPLOYEES:
         return {
            ...state,
            employeesData: action.payload,
         }
      case ActionType.CHANGE_SORT_TYPE:
         return {
            ...state,
            sortType: action.payload
         }
      case ActionType.CHANGE_FILTER_TYPE:
         return {
            ...state,
            filterType: action.payload
         }
      default:
         return {...state}
   }
}

export {reducer, ActionCreator}
