import React from "react"
import Silhouette from './silhouette.png'
import "./CardResult.scss"
// import { configureStore } from '@reduxjs/toolkit'

import DataForms from "./DataForms"
import useCustomForm from "./useCustomForm"


// console.log(store.getState())

// const { values} = DataForms
// console.log(values)

// const { values} = useCustomForm({
//     initialValues,
//     onSubmit: (values) => {
//         console.log("Card Resultdata value showing ")
//     }
// })


const CardResult = (props) => {
   
    const name = `${props.title} ${props.firstName} ${props.lastName}`
    const dob = props.dob
    const empStatus = props.empStatus
    const income= props.income
    const houseNumber= props.houseNumber
    const postCode= props.postCode

    const dataResult =() => {
        if (income || empStatus) {
            if (empStatus === "student") {
                console.log("Student card is available")
                return (
                    <>
                        <li> <p>Anywhere Card</p></li>
                        <li> <p>Liquid Card </p></li>
                        <li> <p>Student Card</p></li>
                    </>
                )
            }
            if (empStatus === "fulltime" && income > 16000) {
                console.log("Fulltime card is available")
                return (
                    <>
                    <li> <p>Anywhere Card</p></li>
                    <li> <p>Liquid Card </p></li>
                </>
                )
            }
            else {
                return (
                    <li> <p>Anywhere Card </p></li>
                )
            }           
        }
        else {
            return (
                <li> <p>Anywhere Card</p></li>
            )
        }
    }

    return (
        <div className="form_main"> 
            <div className="res_container card_contain">
                <div className="result_header_main"> 
                    <h1> Card result </h1>
                </div>
                <div className="card_title">
                    <div className="card_main">
                        <div className="res_row">
                            <div className="column1">
                                <div className="headerbox">
                                    <div className="six wide column ext">
                                    <img className="sil_image" src={Silhouette} alt={"SilhouetteLogo"} />
                                    </div>
                                    <div className="ten wide column">
                                        <p className="namebox">{name}</p>
                                        <p> {dob}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column1">
                                <div className="ui internally celled grid ">
                                    <div className="eight wide column text_left">
                                        <p className="smallText" > {empStatus}</p>
                                        <p className="smallText" > Annual income: <strong> {income}</strong></p>
                                    </div>
                                    <div className="eight wide column text_right">
                                        <p className="smallText" > House number: <strong> {houseNumber}</strong> </p>
                                        <p className="smallText" > Postcode: <strong> {postCode} </strong>  </p>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card_main leftbox">
                        <p>Eligible for:</p>
                        <ul> 
                              {dataResult()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default CardResult

