import React from "react";
import { Editor } from "../../components/Editor";
import { Tabs } from "../../components/Tabs";
import { useEditor } from "../../hooks/useEditor";
import { useTabs } from "../../hooks/useTabs";
import { TabTypes } from "../../interfaces";
import { Checkbox } from "@chakra-ui/react";

export const Main = () => {
  const { jsonInput, changeJsonInput, prettifyOnBlur } = useEditor();
  const { changeTab, currentTab } = useTabs();

  return (
    <>
      <Tabs changeTab={changeTab} currentTab={currentTab} />
      {currentTab === TabTypes.EDITOR && (
        <Editor
          jsonInput={jsonInput}
          changeJsonInput={changeJsonInput}
          prettifyOnBlur={prettifyOnBlur}
        />
      )}

      {currentTab === TabTypes.FORM && (
        <Checkbox value={123} defaultChecked colorScheme="red">
          Hello
        </Checkbox>
      )}
    </>
  );
};
