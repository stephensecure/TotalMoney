import { getTitle } from "hookrouter";
import { useState, useEffect, useRef } from "react";




const useCustomForm = ({
  initialValues,
  onSubmit
  }) => {
  const [values, setValues] = useState(initialValues )
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  // const [onSubmitting, setOnSubmitting] = useState(false);
  // const [onBlur, setOnBlur] = useState(false)

  const formRendered = useRef(true)
  console.log(initialValues)

  useEffect(() => {
    if (formRendered.current) {
        // console.log("set initial values")
        setValues(initialValues)
        setErrors({})
        setTouched({})
        // setOnSubmitting(false)
        // setOnBlur(false)
    }
    formRendered.current = false
  }, [initialValues])

  const handleChange = (event) => {
    const { target } = event
    const { name, value } = target
    event.persist()
    // console.log(event)
    // console.log(values)
    // console.log("change in event")
    setValues({ ...values, [name]: value })
    // console.log(values)
    }

  const handleBlur = (event) => {
    const { target } = event
    const { name } = target
    setTouched({ ...touched, [name]: true })
    setErrors({ ...errors })
    }

  const handleSubmit = (event) => {
    // console.log("Form Submitted")
    // console.log(event)
    // console.log(title)
    if (event) event.preventDefault()
    setErrors({ ...errors })
    console.log(valueOf, onSubmit)
    onSubmit({ values, errors })
    console.log("on Submit clicked")
    // console.log( onSubmit() )
    console.log( values )
  }

//   const handleSelectChange = event => {
//     const value = event.target.value
//     setTitle(value)
//   }


  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
    // handleSelectChange
  }
}

export default useCustomForm;