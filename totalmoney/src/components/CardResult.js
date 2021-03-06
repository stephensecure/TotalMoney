import React from "react"
import Silhouette from './silhouette.png'
import "./CardResult.scss"


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
                return (
                    <>
                        <li> <p>Anywhere Card</p></li>
                        <li> <p>Liquid Card </p></li>
                        <li> <p>Student Card</p></li>
                    </>
                )
            }
            if (income > 16000) {
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
                    <h1> Card Result </h1>
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
                                        <p className="smallText" > Annual income: <strong> ??{income}</strong></p>
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
                <div className="form_bottom" > 
                    <a className="ui red button" href="/forms"> Exit</a>
                </div>
            </div>
           
        </div>
    )
}


export default CardResult

