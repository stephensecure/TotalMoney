import { useState, useEffect, useRef } from "react";


const useCustomForm = ({
  initialValues,
  }) => {
  const [values, setValues] = useState(initialValues )
  const [errors, setErrors] = useState({})
  const formRendered = useRef(true)

  useEffect(() => {
    if (formRendered.current) {
        setValues(initialValues)
        setErrors({})
    }
    formRendered.current = false
  }, [initialValues])

  const handleChange = (event) => {
    const { target } = event
    const { name, value } = target
    event.persist()
    setValues({ ...values, [name]: value })
  }

  return {
    values,
    errors,
    handleChange,
  }
}

export default useCustomForm;