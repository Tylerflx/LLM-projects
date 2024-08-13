import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../redux/reducer/themeModeReducer';
import { Button } from '../ui/button';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode.value);

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Button
      onClick={handleDarkModeToggle}
      className="px-4 py-2 rounded-md bg-gray-800 text-white hover:hoverColor"
    >
      {darkMode ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
};

export default DarkModeToggle;
