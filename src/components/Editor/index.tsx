import React from "react";
import { useEditor } from "../../hooks/useEditor";

interface IProps {
  changeJsonInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  jsonInput: string;
  prettifyOnBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Editor: React.FC<IProps> = ({
  changeJsonInput,
  jsonInput,
  prettifyOnBlur,
}) => {
  return (
    <textarea
      cols={50}
      rows={50}
      onChange={changeJsonInput}
      value={jsonInput}
      onBlur={prettifyOnBlur}
    />
  );
};
