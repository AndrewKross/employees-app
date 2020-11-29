export type EmployeeData = {
  id: number
  name: string
  isArchive: boolean
  role: string
  phone: string
  birthday: string
}

export type State = {
  employeesData: EmployeeData[]
  sortType: string
  filterType: string
  isArchiveFilter: boolean
}
