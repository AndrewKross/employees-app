import {EmployeesData} from "./types";

const initialState = {
   employeesData: []
}

const ActionType = {
   LOAD_EMPLOYEES: `LOAD_EMPLOYEES`
}

const ActionCreator = {
   loadEmployees: (data: EmployeesData[]) => ({
      type: ActionType.LOAD_EMPLOYEES,
      payload: data,
   })
}

const reducer = (state = initialState, action: any) => {
   switch (action.type) {
      case ActionType.LOAD_EMPLOYEES:
         return {
            ...state,
            employeesData: action.payload,
         }
      default:
         return {...state}
   }
}

export {reducer, ActionCreator}
