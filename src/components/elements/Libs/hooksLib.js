import { useState } from 'react'

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState)

  return [
    fields,
    function (event) {
      console.log(Object.values(event))
      // console.log(event)
      setValues(event)
    },
  ]
}
