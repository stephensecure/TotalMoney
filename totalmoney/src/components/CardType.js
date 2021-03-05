import React from 'react'
import Virginred from './virginred.png'
import "./CardType.scss"


const CardType = (props) => {

    return (
        <div>
            <div className="product">

                <div className="product_container">
                    <div className="product_content">
                        <div className="product_header">
                            <p className="info_header"> GUARANTEED APR</p> 
                            <p className="info_body">  You are guaranteed to get the APR shown if you're accepted </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="ui three column grid">
                            <div className="two column row">
                                <div className="thirteen wide column">
                                    <p className="header_text"> {props.title} </p>
                                </div>
                                <div className="column">
                                </div>
                            </div>
                            <div className=" three wide column">
                                <img className="virginred" src={Virginred} alt={"virginlogo"} />
                            </div>
                            <div className="ten wide column">
                                <div className="ui internally celled grid cdtable">
                                    <div className="four wide column">
                                        <div className="cell_dm"> 
                                            <span className="card_cell_top"> Balance Transfer offer duration</span>
                                        </div>
                                        <div className="cell_dm_bottom"> 
                                                <p className="card_cell"> {props.balanceDuration} months</p>
                                        </div>
                                    </div>
                                    <div className="four wide column">
                                    <div className="cell_dm"> 
                                        <span className="card_cell_top">0% Purchase offer duration</span>
                                        </div>
                                        <div className="cell_dm_bottom"> 
                                        <p className="card_cell"> {props.offerDuration} months</p>
                                        </div>
                                    </div>
                                    <div className="four wide column">
                                    <div className="cell_dm"> 
                                        <span className="card_cell_top"> Representative % APR (variable)</span>
                                        </div>
                                        <div className="cell_dm_bottom"> 
                                        <p className="card_cell"> {props.aprvalue}% APR</p>
                                        </div>
                                    </div>
                                    <div className="four wide column">
                                    <div className="cell_dm"> 
                                        <span className="card_cell_top">  Credit Available</span>
                                        </div>
                                        <div className="cell_dm_bottom"> 
                                        <p className="card_cell"> £{props.creditAvailable} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="three wide column lbtn">
                                <a className="ui primary button" href="/form">Check your Eligibility</a>
                               <p><a href="https://www.totallymoney.com/credit-cards/card/hsbc-balance-transfer-credit-card/"> See more Details</a> </p> 
                            </div>
                        </div>
                    </div>
                    <div className="pb_container">
                        <p className="ph_text_top" > Representative Example ? &nbsp; </p>
                        <p className="ph_text"> If you spend £{props.creditAvailable} at a purchase interest rate of {props.aprvalue}% p.a. (variable) your representative APR will be {props.offerDuration}% APR (variable) </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardType;