import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCode } from '../store/editorSlice';
import { Editor } from '@monaco-editor/react';

const CodeEditor = () => {
  const editorRef = useRef(null); 
  const dispatch = useDispatch();

  const language = useSelector((state) => state.editor.language);
  const code = useSelector((state) => state.editor.codes[language]); 

  const handleCodeChange = (newCode) => {
    if (newCode !== null) {
      dispatch(updateCode({ language, code: newCode }));
    }
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor; 
  };

  useEffect(() => {
    if (editorRef.current) {
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
    
    setTimeout(() => editor.layout(), 0);
  }}
  options={{
    fontSize: 16,
    automaticLayout: false, 
    minimap: { enabled: false },
  }}
/>

    </div>
  );
};

export default CodeEditor;
