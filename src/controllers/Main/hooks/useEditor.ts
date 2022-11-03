import { FieldTypes } from 'interfaces'
import React, { useState } from 'react'
import { prettyPrint } from 'utils/pretty-print-json'

import { defaultInputValue } from './defaults'

const defaultJson = prettyPrint(defaultInputValue)

export const useEditor = () => {
  const [jsonInput, setJsonInput] = useState(defaultJson)
  const [isError, setJsonError] = useState(false)

  // разбить функции по отдельным контроллерам и хукам, разделить ответственность
  function parseJsonAndSetErrors(jsonString: string) {
    try {
      const obj = JSON.parse(jsonString)

      if (obj && typeof obj === 'object') {
        setJsonError(false)
        return obj
      }
    } catch (e) {
      setJsonError(true)
    }

    return false
  }

  const changeJsonInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setJsonInput(value)
  }

  const prettifyOnBlur = () => {
    const obj = parseJsonAndSetErrors(jsonInput)

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

    setJsonInput(prettyPrint(JSON.stringify(newObject)))
  }

  return {
    changeJsonInput,
    jsonInput,
    prettifyOnBlur,
    insertDataToInput,
    parseJsonAndSetErrors,
    isError,
  }
}
