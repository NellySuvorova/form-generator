import React from "react";
import { Editor } from "../../components/Editor";
import { useEditor } from "../../hooks/useEditor";

export const Main = () => {
  const { jsonInput, changeJsonInput, prettifyOnBlur } = useEditor();

  return (
    <Editor
      jsonInput={jsonInput}
      changeJsonInput={changeJsonInput}
      prettifyOnBlur={prettifyOnBlur}
    />
  );
};
