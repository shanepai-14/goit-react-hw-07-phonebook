import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';


const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => dispatch(setFilter(e.target.value))}
      placeholder="Search contacts"
 
    />
  );
};

export default Filter;