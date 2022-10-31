import React, { useState } from 'react'
import { prettyPrint } from '../utils'
import { FieldTypes } from '../interfaces'

const defaultObject = {
  title: 'My custom form',
  buttons: ['OK', 'Cancel', 'Apply'],
  items: [
    {
      label: 'count',
      type: FieldTypes.NUMBER,
    },
  ],
}

const defaultJson = prettyPrint(JSON.stringify(defaultObject))

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
