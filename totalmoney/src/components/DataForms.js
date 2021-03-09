// import React from "react";
import React, {useState} from "react"
// import CardResult from "./CardResult";

import useCustomForm from "./useCustomForm";
import "./DataForm.scss"
import CardResult from "./CardResult";

import { configureStore } from '@reduxjs/toolkit'


    // const showResult = (values)=> {
    //     // console.log("showResult")
    //     renderResults(values)
    // }

    // const renderResults = (values) => {
    //     // console.log(values)
    //     return (
    //         <> 
    //         {"show card result..."}
    //             <CardResult {...values}/>
    //         </>
    //     )
    // }


    // create engine to show data for or result 
    const resultEngine =() => {
        console.log("this is the result engine")
        // Show result
    }

    const DataForms = () => {

        // resultEngine() 

        const initialValues = {
            firstName: "",
            lastName: "",
            dob: "",
            empStatus : "",
            income: "",
            houseNumber: "",
            postCode: "",
            // title: title1()
        }

        const [title, setTitle] = useState("")
        const handleSelectChange = event => {
            const value = event.target.value
            setTitle(value)
        }
        // const handleSubmit = event => {
        //     if (event) event.preventDefault()
        //     console.log("handleSubmit")
        //     onSubmit({ values, errors })
        // }
        const data1 = {...initialValues, title}

        const {
            values,
            // errors,
            // touched,
            handleChange,
            // handleBlur,
            handleSubmit,
            } = useCustomForm({
            // initialValues,
            initialValues: data1,
            // initialValues: { ...initialValues, title },
            // title,
            onSubmit: (values) => {
                console.log("show/hid - run my function call here", { values, initialValues })
                console.log("test 2")
                // href="/form"
            }
        })

        console.log(values)

        const data = {...values, title}
            // console.log(data)

        const resultData = (data)=> {
                return (
                    <div className="form_main">
                        {/* {showResult(data) } */}
                        <CardResult {...data}/>
                    </div>
                )
        }

        const [formDisplay, SetFormDisplay] = useState("flex")
        const [resultDisplay, SetResultDisplay] = useState("none")


        const steveSubmit =(event) => {
            console.log("handle Steve submit")
            SetFormDisplay("none")
            SetResultDisplay("flex")
            if (event) event.preventDefault()

        }
        const showForm = ()=> {
            const data = {...values, title}

            // console.log(data)
            // console.log(values)

            return (
                <>
            <div className="form_main">  
            <form onSubmit={steveSubmit} className="ui form">
                <h2> Eligibility Form</h2>
                <p className= "" > Please enter your Details</p>
                <div className="form_container"> 
                    <div className="form_fields">
                        <div className="ui form">
                            <div className="inline fields">
                                <label>Title </label>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="title" value="Mr." checked={title === 'Mr.'} onClick={() => setTitle('Mr.')} onChange={event => handleSelectChange(event)} tabIndex="0" />
                                        <label>Mr</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                    <input type="radio" name="title" value="Mrs" checked={title === 'Mrs'} onClick={() => setTitle('Mrs')} onChange={event => handleSelectChange(event)} tabIndex="0" />
                                        <label>Mrs</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                    <input type="radio" name="title" value="Miss" checked={title === 'Miss'} onClick={() => setTitle('Miss')} onChange={event => handleSelectChange(event)} tabIndex="0" />
                                        <label>Miss</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                    <input type="radio" name="title" value="Ms" checked={title === 'Ms'} onClick={() => setTitle('Ms')} onChange={event => handleSelectChange(event)} tabIndex="0" />
                                        <label>Ms</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                    <input type="radio" name="title" value="Dr." checked={title === 'Dr.'} onClick={() => setTitle('Dr.')} onChange={event => handleSelectChange(event)} tabIndex="0" />
                                        <label>Dr.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fields">
                        <div className="eight wide field">
                            <label htmlFor="firstName">First name</label>
                            <input id="firstName" name="firstName" type="text" placeholder="First Name" value= {data.firstName}   onChange={handleChange} />
                        </div>
                        <div className="eight wide field">
                            <label htmlFor="lastName" >Last name</label>
                            <input id="lastName" type="text" name="lastName" placeholder="Last Name" value= {data.lastName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="dob" >Date of birth</label>
                        <input id="dob" type= "date" name="dob" value= {values.dob} onChange={handleChange} />
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="empStatus" > Employment Status</label>
                        <select className="ui dropdown" placeholder="Employment Status" name="empStatus" value= {data.empStatus} onChange={handleChange}>
                            <option value="" disabled>-</option>
                            <option value="fulltime">Full time</option>
                            <option value="partime">Part time</option>
                            <option value="student">Student</option>
                            <option value="umemployed">Unemployed</option>
                        </select>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="income" > Annual Income (£)</label>
                        <input id="income" type= "number" step="any" min="1000" max="1000000" name="income" value= {data.income} onChange={handleChange}/>
                    </div>
                    <div className="fields">
                        <div className="eight wide field">
                            <label htmlFor= "houseNumber"> House Number</label>
                            <input id="houseNumber" type= "number" name="houseNumber" value= {data.houseNumber} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="eight wide field">
                            <label htmlFor="postCode" > Post Code </label>
                            <input id="postCode" type= "text" name="postCode" value= {data.postCode} onChange={handleChange}/>
                        </div>
                    </div>
                    <div> 
                        <button className="ui green button " type="submit">Submit</button>
                        <a className="ui red button cancelbtn"  href="/">Cancel</a>
                    </div>
                </div>
            </form>
        {/* </div> */}
        </div>
        </>
            )
        }
       
      return (
        <>
            <div style={{color: "red", border:"2px solid red", display: formDisplay } } > 
                { showForm(data) }
            </div>
            <div style={{border:"2px solid blue", display: resultDisplay } } > 
                { resultData(data) }
            </div>
        </>
        )
    }

    export default DataForms