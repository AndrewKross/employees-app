export type EmployeesData = {
   id: number
   name: string
   isArchive: boolean
   role: string
   phone: string
   birthday: string
}

export type State = {
   employeesData: EmployeesData[]
   sortType: string
   filterType: string
   isArchiveFilter: boolean
}
