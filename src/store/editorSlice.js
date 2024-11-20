import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'javascript',
  codes: {
    javascript: `var returnmax = function(nums) {\n  // Insert your code here\n};`,
    java: `class Solution {\n  public int returnmax(int[] nums) {\n    // Insert your code here\n  }\n}`,
  },
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    updateCode: (state, action) => {
      const { language, code } = action.payload;
      state.codes[language] = code;
    },
    resetCode: (state) => {
      state.codes[state.language] = initialState.codes[state.language];
    },
  },
});

export const { setLanguage, updateCode, resetCode } = editorSlice.actions;

export default editorSlice.reducer;
