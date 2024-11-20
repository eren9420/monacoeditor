import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCode } from '../store/editorSlice';

const Buttons = () => {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.editor.codes[state.editor.language]); // O anki dilin kodunu al
  const [copyText, setCopyText] = useState("Copy"); // Copy butonu metni

  const handleReset = () => {
    dispatch(resetCode()); // Redux store'da kodu sıfırla
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopyText("Copied!"); // Metni "Copied!" olarak değiştir
      setTimeout(() => setCopyText("Copy"), 3000); // 3 saniye sonra "Copy" olarak geri döner
    });
  };

  return (
    <div className="buttons">
      <button className="reset-button" onClick={handleReset}>
        Reset to Initial Code
      </button>
      <button className="copy-button" onClick={handleCopy}>
        {copyText}
      </button>
    </div>
  );
};

export default Buttons;
