import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditorState {
  language: "js" | "py";
  fontSize: number;
}

const initialState: EditorState = {
  language: "js",
  fontSize: 16,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"js" | "py">) => {
      state.language = action.payload;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
  },
});

export const { setLanguage, setFontSize } = editorSlice.actions;
export default editorSlice.reducer;
