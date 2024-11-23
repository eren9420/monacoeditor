import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../store/editorSlice";

const languageOptions = [
  { value: "javascript", label: "JavaScript", id: 63 },
  { value: "java", label: "Java", id: 62 },
];

const Dropdown = () => {
  const language = useSelector((state) => state.editor.language);
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="dropdown">
      <label htmlFor="language-select">Choose Language:</label>
      <select id="language-select" value={language} onChange={handleLanguageChange}>
        {languageOptions.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
