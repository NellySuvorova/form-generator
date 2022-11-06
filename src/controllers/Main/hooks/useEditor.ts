import React, { useState } from 'react'

import { FieldTypes } from 'interfaces'
import { prettyPrint } from 'utils/pretty-print-json'
import { parseJson } from 'utils/parse-json'

import { defaultInputValue } from './defaults'

const defaultJson = prettyPrint(defaultInputValue)

export const useEditor = () => {
  const [jsonInput, setJsonInput] = useState(defaultJson)
  const [isError, setJsonError] = useState(false)

  const changeJsonInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setJsonInput(value)
  }

  const prettifyOnBlur = () => {
    const obj = parseJson(jsonInput)

    if (!obj) {
      setJsonError(true)
      return
    }
    const prettyValue = prettyPrint(obj)
    setJsonError(false)

    setJsonInput(prettyValue)
  }

  const insertDataToInput = (type: FieldTypes) => {
    const field = { type, label: '' }

    const currentObject = JSON.parse(jsonInput)

    const { items } = currentObject
    const newItems = [...items, field]
    const newObject = { ...currentObject, items: newItems }

    setJsonInput(prettyPrint(newObject))
  }

  return {
    changeJsonInput,
    jsonInput,
    prettifyOnBlur,
    insertDataToInput,
    isError,
  }
}
