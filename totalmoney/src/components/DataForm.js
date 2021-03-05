import React, {useState} from "react"
// import CardResult from "./CardResult"
// import ReactDom from "react-dom"
import "./DataForm.scss"


const DataForm = () => {
    const [title, setTitle] = useState("")
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDob] = useState("")
    const [empStatus, SetEmpStatus] = useState("")
    const [income, setIncome] = useState("")
    const [houseNumber, setHouseNumber] = useState("")
    const [postCode, setPostCode] = useState("")
    const [agree, setAgree] = useState(false)

    const handleSelectChange = event => {
        const value = event.target.value
        setTitle(value)
      }

    //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { target } = event
    //     const { name, value } = target
    //     event.persist()
    //     setValues({ ...values, [name]: value })
    //   }


    // console.log(title)
    // console.log(firstName)
    // console.log(lastName)
    // console.log(dob)
    // console.log(empStatus)
    // console.log(income)
    // console.log(houseNumber)
    // console.log(postCode)
    // console.log(agree)

    // const handleSubmit = (firstName, evt) => {
        const handleSubmit = (evt) => {
            // console.log(evt)
            // console.log(evt.target)
          
        evt.preventDefault()
        console.log(evt)
        alert(` Name: ${title} ${firstName} ${lastName}, Date of Birth ${dob}, Employment Status ${empStatus}, Income  ${income}, House Number  ${houseNumber}, Post Code  ${postCode} `)
        // console.log(props)
        // console.log(firstName)
        console.log("form submitted")
          // const formData = new FormData(evt.target)
            // console.log(formData)
            // evt.preventDefault();
            // for (let [key, value] of formData.entries()) {
            //     // console.log(formData.entries())
            //     console.log(key, value);
            //     console.log("form submitted")
            // }
        
    }


    return (
        <>
        <div className="form_main"> 
            <form onSubmit={handleSubmit} className="ui form">
                <h2> Eligibility Form</h2>
                <p className= "" > Please enter your Details</p>
                <div className="form_container"> 
                    <div className="form_fields">
                        <div className="ui form">
                            <div className="inline fields">
                                <label>Title </label>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="title" value="Mr." checked={title === 'Mr.'} onClick={() => setTitle('Mr')} onChange={event => handleSelectChange(event)} tabIndex="0" />
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
                                    <input type="radio" name="title" value="Dr." checked={title === 'Dr.'} onClick={() => setTitle('Dr')} onChange={event => handleSelectChange(event)} tabIndex="0" />
                                        <label>Dr.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="eight wide field">
                            <label htmlFor="firstName">First name</label>
                            <input id="firstName" type="text" placeholder="First Name" value= {firstName}  onChange={e => setFirstname(e.target.value)}  />
                        </div>
                        <div className="eight wide field">
                            <label htmlFor="lastName" >Last name</label>
                            <input id="lastName" type="text" placeholder="Last Name" value= {lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="dob" >Date of birth</label>
                        <input id="dob" type= "date" value= {dob} onChange={e => setDob(e.target.value)} />
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="empStatus" > Employment Status</label>
                        <select className="ui dropdown" placeholder="Employment Status" value= {empStatus} onChange={e => SetEmpStatus(e.target.value)} >
                            <option value="" disabled>-</option>
                            <option value="1">Full time</option>
                            <option value="2">Part time</option>
                            <option value="3">Student</option>
                            <option value="4">Unemployed</option>
                        </select>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="income" > Annual Income (£)</label>
                        <input id="income" type= "number" step="any" min="1000" max="1000000" value= {income} onChange={e => setIncome(e.target.value)} />
                    </div>
                    <div className="fields">
                        <div className="eight wide field">
                            <label htmlFor= "houseNumber"> House Number</label>
                            <input id="houseNumber" type= "number" value= {houseNumber} onChange={e => setHouseNumber(e.target.value)} />
                        </div>
                    <div className="fields">
                        <div className="eight wide field">
                            <label htmlFor="postCode" > Post Code </label>
                            <input id="postCode" type= "text" value= {postCode} onChange={e => setPostCode(e.target.value)} />
                        </div>
                    </div>
                    </div>
                    <div className="fields">
                        <div className="ui checkbox">
                            <input id= "agree" type="checkbox" onChange={(event) => setAgree(event.currentTarget.checked)} checked={agree}/>
                            <label>I agree to the Terms and Conditions</label>
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

export default DataForm