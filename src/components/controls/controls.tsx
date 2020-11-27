import React from "react";
import { connect } from 'react-redux';
import {FilterType, SortType} from "../../const";
import {State} from "../../types";
import {ActionCreator} from "../../reducer";

type Props = {
   sortType: string
   filterType: string
   changeSortType: (sortType: string) => void
   changeFilterType: (filterType: string) => void
}

const Controls = ({sortType, filterType, changeSortType, changeFilterType}: Props) => {
   return (
      <section className="controls">
         <h2>Controls</h2>
         <div className="controls__sorting">
            <p>Сортировать по:</p>
            <input type="radio" name="sortInput" id="sortInput-1" defaultChecked onChange={() => changeSortType(SortType.NAME)}/>
            <label htmlFor="sortInput-1">Имени</label>
            <input type="radio" name="sortInput" id="sortInput-2" onChange={() => changeSortType(SortType.BIRTHDAY)}/>
            <label htmlFor="sortInput-2">Дате рождения</label>
         </div>
         <div className="controls__filters">
            <p>Фильтровать по:</p>
            <p>Должности</p>
            <select onChange={(evt) => changeFilterType(evt.target.value)}>
               <option value={FilterType.NONE}>Все</option>
               <option value={FilterType.COOK}>Повар</option>
               <option value={FilterType.WAITER}>Официант</option>
               <option value={FilterType.DRIVER}>Водитель</option>
            </select>
            <input type="checkbox" id="archiveFilter"/>
            <label htmlFor="archiveFilter">В архиве</label>
         </div>
      </section>
   )
}

const mapStateToProps = (state: State) => ({
   sortType: state.sortType,
   filterType: state.filterType,
})

const mapDispatchToProps = (dispatch: any) => ({
   changeSortType(sortType: string) {
      dispatch(ActionCreator.changeSortType(sortType))
   },
   changeFilterType(filterType: string) {
      dispatch(ActionCreator.changeFilterType(filterType))
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
