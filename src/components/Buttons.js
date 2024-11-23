import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetCode } from "../store/editorSlice";
import { createSubmission, getSubmissionResult } from "../api/judge0";

const Buttons = () => {
  const code = useSelector((state) => state.editor.codes[state.editor.language]);
  const language = useSelector((state) => state.editor.language);
  const dispatch = useDispatch();

  const [output, setOutput] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [copyText, setCopyText] = useState("Copy"); 

  const languageMap = {
    javascript: 63,
    java: 62,
    
  };

  
  const handleReset = () => {
    dispatch(resetCode()); 
    setOutput(""); 
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopyText("Copied!"); 
      setTimeout(() => setCopyText("Copy"), 3000); 
    });
  };

  const handleRun = async () => {
    setLoading(true);
    setOutput(""); 

    try {
      const token = await createSubmission(
        code,
        languageMap[language],
        "" 
      );

      const result = await getSubmissionResult(token);

      setOutput(result.stdout || result.stderr || "No output");
    } catch (error) {
      setOutput("An error occurred while running the code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="buttons">
      <button className="reset-button" onClick={handleReset}>
        Reset to Initial Code
      </button>

      <button className="copy-button" onClick={handleCopy}>
        {copyText}
      </button>

      <button className="run-button" onClick={handleRun} disabled={loading}>
        {loading ? "Running..." : "Run"}
      </button>

      <div className="output-container">
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default Buttons;
