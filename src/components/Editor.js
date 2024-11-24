import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCode } from '../store/editorSlice';
import { Editor } from '@monaco-editor/react';

const CodeEditor = () => {
  const editorRef = useRef(null);
  const containerRef = useRef(null);
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
    const resizeObserver = new ResizeObserver(() => {
      if (editorRef.current) {
        editorRef.current.layout(); 
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="editor-container" ref={containerRef}>
      <Editor
        language={language}
        value={code}
        onChange={handleCodeChange}
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={{
          fontSize: 16,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default CodeEditor;
