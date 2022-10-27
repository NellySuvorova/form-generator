import React, { useState } from "react";
import { prettyPrint } from "../utils";
import { FieldTypes, FormConfig } from "../interfaces";

const obj = {
  title: "My custom form",
  buttons: ["OK", "Cancel", "Apply"],
  items: [
    {
      label: "count",
      type: FieldTypes.NUMBER,
    },
  ],
};
// TODO сделать вывод ошибки для инвалидного JSON
const defaultValue = prettyPrint(JSON.stringify(obj));

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
