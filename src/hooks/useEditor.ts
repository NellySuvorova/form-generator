import React, { useState } from "react";
import { prettyPrint } from "../utils";

const obj = {
  key1: "val1",
  key2: "value2",
};

const defaultValue = JSON.stringify(obj);

export const useEditor = () => {
  const [jsonInput, setJsonInput] = useState(defaultValue);

  const changeJsonInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonInput(value);
  };

  const prettifyOnBlur = () => {
    const prettyValue = prettyPrint(jsonInput);
    setJsonInput(prettyValue);
  };

  return {
    changeJsonInput,
    jsonInput,
    prettifyOnBlur,
  };
};
