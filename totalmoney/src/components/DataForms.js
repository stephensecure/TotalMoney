import React, {useState} from "react"
import useCustomForm from "./useCustomForm";
import "./DataForm.scss"
import CardResult from "./CardResult";


    const DataForms = () => {

        const initialValues = {
            firstName: "",
            lastName: "",
            dob: "",
            empStatus : "",
            income: "",
            houseNumber: "",
            postCode: "",
        }

        const [title, setTitle] = useState("")
        const handleSelectChange = event => {
            const value = event.target.value
            setTitle(value)
        }
        const data1 = {...initialValues, title}

        const {
            values,
            handleChange,
            } = useCustomForm({
            initialValues: data1,
        })

        const data = {...values, title}
        const resultData = (data)=> {
            return (
                <div >
                    <CardResult {...data}/>
                </div>
            )
        }

        const [formDisplay, SetFormDisplay] = useState("block")
        const [resultDisplay, SetResultDisplay] = useState("none")


        const sendData =(event) => {
            SetFormDisplay("none")
            SetResultDisplay("block")
            if (event) event.preventDefault()
        }

        const showForm = ()=> {
            const data = {...values, title}

            return (
                <>
                <div className="form_main">  
                    <form onSubmit={sendData} className="ui form">
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
                                    <input id="firstName" name="firstName" type="text" placeholder="First Name" value= {data.firstName} onChange={handleChange} required/>
                                </div>
                                <div className="eight wide field">
                                    <label htmlFor="lastName" >Last name</label>
                                    <input id="lastName" type="text" name="lastName" placeholder="Last Name" value= {data.lastName} onChange={handleChange} required/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label" htmlFor="dob" >Date of birth</label>
                                <input id="dob" type= "date" name="dob" value= {values.dob} onChange={handleChange} required />
                            </div>
                            <div className="field">
                                <label className="label" htmlFor="empStatus" > Employment Status</label>
                                <select className="ui dropdown" placeholder="Employment Status" name="empStatus" value= {data.empStatus} onChange={handleChange  }>
                                    <option value="" disabled>-</option>
                                    <option value="fulltime">Full time</option>
                                    <option value="partime">Part time</option>
                                    <option value="student">Student</option>
                                    <option value="umemployed">Unemployed</option>
                                </select>
                            </div>
                            <div className="field">
                                <label className="label" htmlFor="income" > Annual Income (£)</label>
                                <input id="income" type= "number" step="any" min="1000" max="1000000" name="income" value= {data.income} onChange={handleChange} required />
                            </div>
                            <div className="fields">
                                <div className="eight wide field">
                                    <label htmlFor= "houseNumber"> House Number</label>
                                    <input id="houseNumber" type= "number" name="houseNumber" value= {data.houseNumber} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="fields">
                                <div className="eight wide field">
                                    <label htmlFor="postCode" > Post Code </label>
                                    <input id="postCode" type= "text" name="postCode" value= {data.postCode} onChange={handleChange} required />
                                </div>
                            </div>
                            <div> 
                                <button className="ui green button " type="submit">Submit</button>
                                <a className="ui red button cancelbtn"  href="/">Cancel</a>
                            </div>
                        </div>
                    </form>
                </div>
                </>
            )
        }
        
        return (
            <>
                <div style={{display: formDisplay } } > 
                    { showForm(data) }
                </div>
                <div style={{ display: resultDisplay } } > 
                    <div className="form_head" >
                        <div className="form_main" > 
                            { resultData(data) }
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }

    export default DataForms