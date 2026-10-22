"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { setFontSize } from "@/store/editorSlice";

const SIZES = [12, 14, 16, 18, 20];

export default function FontSizeMenu() {
  const dispatch = useAppDispatch();
  const fontSize = useAppSelector((state) => state.editor.fontSize);

  return (
    <div className="flex items-center gap-1 text-sm">
      <label htmlFor="font-size-select" className="text-gray-600">
        Font size:
      </label>
      <select
        id="font-size-select"
        value={fontSize}
        onChange={(e) => dispatch(setFontSize(Number(e.target.value)))}
        className="rounded border border-input bg-background px-2 py-1 text-sm font-medium">
        {SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}
