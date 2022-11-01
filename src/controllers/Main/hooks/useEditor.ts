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

  return {
    changeJsonInput,
    jsonInput,
    prettifyOnBlur,
    isError,
  }
}
