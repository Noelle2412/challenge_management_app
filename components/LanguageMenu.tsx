"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { setLanguage } from "@/store/editorSlice";

export default function LanguageMenu() {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.editor.language);

  return (
    <div className="flex items-center gap-1 text-sm">
      <label htmlFor="language-select" className="text-gray-600">
        Language:
      </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => dispatch(setLanguage(e.target.value as "js" | "py"))}
        className="rounded border border-input bg-background px-2 py-1 text-sm font-medium">
        <option value="js">js</option>
        <option value="py">py</option>
      </select>
    </div>
  );
}
