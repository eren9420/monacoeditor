import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetCode } from "../store/editorSlice";
import { createSubmission, getSubmissionResult } from "../api/judge0";

const Buttons = ({ setOutput }) => {
  const dispatch = useDispatch();
  const [isRunning, setIsRunning] = useState(false); 
  const code = useSelector((state) => state.editor.codes[state.editor.language]); 
  const language = useSelector((state) => state.editor.language);


  const languageIds = {
    javascript: 63,
    java: 62,
  };

  const handleReset = () => {
    dispatch(resetCode()); 
    setOutput("Output will appear here..."); 
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  const handleRun = async () => {
    if (isRunning) return; 
    setIsRunning(true);
    setOutput("Running...");

    try {
      const languageId = languageIds[language];
      if (!languageId) {
        throw new Error("Unsupported language selected.");
      }

     
      const token = await createSubmission(code, languageId);

      const result = await getSubmissionResult(token);

      if (result.stdout) {
        setOutput(result.stdout);
      } else if (result.stderr) {
        setOutput(`Error: ${result.stderr}`);
      } else if (result.compile_output) {
        setOutput(`Compile Error: ${result.compile_output}`);
      } else {
        setOutput("No output received.");
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="buttons">
      <button className="reset-button" onClick={handleReset}>
        Reset to Initial Code
      </button>
      <button className="copy-button" onClick={handleCopy}>
        Copy
      </button>
      <button className="run-button" onClick={handleRun} disabled={isRunning}>
        {isRunning ? "Running..." : "Run"}
      </button>
    </div>
  );
};

export default Buttons;
