import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../store/editorSlice';

const Dropdown = () => {
  const language = useSelector((state) => state.editor.language);
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value)); // Redux store'da dili güncelle
  };

  return (
    <div className="dropdown">
      <label htmlFor="language-select">Choose Language:</label>
      <select id="language-select" value={language} onChange={handleLanguageChange}>
        <option value="javascript">JavaScript</option>
        <option value="java">Java</option>
      </select>
    </div>
  );
};

export default Dropdown;
