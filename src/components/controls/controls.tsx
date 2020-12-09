import React from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { AppRoute, FilterType, SortType } from "../../const"
import { ActionCreator } from "../../reducer/reducer"
import { Button, Checkbox, Radio, Select } from "antd"
import "./controls.scss"
import { State } from "../../types"
import { getFilterType, getIsArchiveFilter, getSortType } from "../../reducer/selectors"

const { Option } = Select

type Props = {
  changeSortType: (sortType: string) => void
  changeFilterType: (filterType: string) => void
  changeIsArchiveFilter: (isChecked: boolean) => void
  history: any
  filterType: string
  sortType: string
  isArchiveFilter: boolean
}

const Controls = ({ filterType, sortType, isArchiveFilter, changeSortType, changeFilterType, changeIsArchiveFilter, history }: Props) => {
  return (
    <section className="controls">
      <div className="controls__sorting">
        <p className="controls__sorting__label">Сортировать по:</p>
        <Radio.Group onChange={(evt) => changeSortType(evt.target.value)} defaultValue={sortType}>
          <Radio value={SortType.NAME}>Имени</Radio>
          <Radio value={SortType.BIRTHDAY}>Дате рождения</Radio>
        </Radio.Group>
      </div>
      <div className="controls__filters">
        <p>Фильтры: </p>
        <Select className="role-filter" defaultValue={filterType}
                onChange={(evt) => changeFilterType(evt.valueOf().toString())}>
          <Option value={FilterType.NONE}>Все</Option>
          <Option value={FilterType.COOK}>Повар</Option>
          <Option value={FilterType.WAITER}>Официант</Option>
          <Option value={FilterType.DRIVER}>Водитель</Option>
        </Select>
        <label htmlFor="archiveFilter">В архиве: </label>
        <Checkbox type="checkbox" id="archiveFilter" defaultChecked={isArchiveFilter} onChange={
          (evt) => changeIsArchiveFilter(evt.target.checked)
        }/>
      </div>
      <Button className="add-new-btn"
              onClick={() => {
                history.push(`${AppRoute.EMPLOYEE_PAGE}new`)
                console.log('Выполнен переход на страницу создания новой карточки сотрудника')
              }}>
        Добавить нового сотрудника
      </Button>
    </section>
  )
}

const mapStateToProps = (state: State) => ({
  filterType: getFilterType(state),
  sortType: getSortType(state),
  isArchiveFilter: getIsArchiveFilter(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  changeSortType(sortType: string) {
    dispatch(ActionCreator.changeSortType(sortType))
    console.log(`Выбрана сортировка по ${sortType}`)
  },
  changeFilterType(filterType: string) {
    dispatch(ActionCreator.changeFilterType(filterType))
    console.log(`Выбрана фильтрация по ${filterType}`)
  },
  changeIsArchiveFilter(isChecked: boolean) {
    dispatch(ActionCreator.changeIsArchiveFilter(isChecked))
    console.log(`Фильтрация "в архиве" изменена на ${isChecked}`)
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Controls))
