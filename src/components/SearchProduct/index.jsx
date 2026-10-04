import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { productsSearchFilterAction, productsSortAction } from '../../store/reducers/productReducer';
import s from './style.module.css'

const SearchProduct = () => {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState('asc');

  const searchOnChange = (e) => {
    dispatch(productsSearchFilterAction(e.target.value))
  };

  const sortOnChange = (e) => {
    const value = e.target.value;
    setSortType(value);
    dispatch(productsSortAction(value));
  };

  return (
    <div className={s.container}>
        <div className={s.form}>
            <input 
              type="search" 
              name="search" 
              id="search" 
              placeholder='Название' 
              onChange={searchOnChange}
            />
        </div>
          <div className={s.sortBlock}>
              <p>Отсортировать по:</p>
          <select value={sortType} onChange={sortOnChange}>
              <option value='asc'>по возрастанию</option>
              <option value='desc'>по убыванию</option>
          </select>
        </div>
    </div>
  )
}

export default SearchProduct