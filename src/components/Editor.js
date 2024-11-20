import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCode } from '../store/editorSlice';
import { Editor } from '@monaco-editor/react';

const CodeEditor = () => {
  const editorRef = useRef(null); // Editor'ü referansla kontrol etmek için
  const dispatch = useDispatch();

  const language = useSelector((state) => state.editor.language);
  const code = useSelector((state) => state.editor.codes[language]); // O anki dilin kodunu al

  const handleCodeChange = (newCode) => {
    if (newCode !== null) {
      dispatch(updateCode({ language, code: newCode })); // O anki dilin kodunu güncelle
    }
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor; // Editor'ü referansa bağla
  };

  useEffect(() => {
    if (editorRef.current) {
      // Editor boyutlandırması veya diğer ayarlarla ilgili bir işlem gerekirse buraya eklenebilir
      editorRef.current.layout();
    }
  }, [language]);

  return (
    <div className="editor-container">
      <Editor
  language={language}
  value={code}
  onChange={handleCodeChange}
  theme="vs-dark"
  onMount={(editor) => {
    editorRef.current = editor;
    // Trigger layout manually after mounting
    setTimeout(() => editor.layout(), 0);
  }}
  options={{
    fontSize: 16,
    automaticLayout: false, // Disable automatic layout
    minimap: { enabled: false },
  }}
/>

    </div>
  );
};

export default CodeEditor;
