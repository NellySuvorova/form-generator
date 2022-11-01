import { FieldTypes } from 'interfaces'
import React, { useState } from 'react'
import { prettyPrint } from 'utils/pretty-print-json'

import { defaultInputValue } from './defaults'

const defaultJson = prettyPrint(JSON.stringify(defaultInputValue))

export const useEditor = () => {
  const [jsonInput, setJsonInput] = useState(defaultJson)
  const [isError, setJsonError] = useState(false)

  const changeJsonInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setJsonInput(value)
  }

  const prettifyOnBlur = () => {
    try {
      const prettyValue = prettyPrint(jsonInput)
      setJsonError(false)
      setJsonInput(prettyValue)
    } catch {
      setJsonError(true)
    }
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
    isError,
    insertDataToInput,
  }
}
