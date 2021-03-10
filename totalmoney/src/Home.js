import React from 'react';
import  CardType  from "./components/CardType.js";

const Home =() => {

      return (
        <>
        <div className="container_main"> 
            <div className="product_main">
                <div className="product_name"> 
                    <h1 className= "header_main"> Welcome to Total Money, please select a card from our available cards </h1>
                </div>
                <div> 
                    <CardType title= "Student Card" balanceDuration = "0" offerDuration = "6" aprvalue = "18.9" transferFee = "2.7" creditAvailable= "1200" titleInfo=" The Student Life credit card is only available to customers with an employment status of Student." />
                    <CardType title= "Anywhere Card" balanceDuration = "0" offerDuration = "0" aprvalue = "33.9" transferFee = "2.7" creditAvailable= "300" titleInfo=" The anywhere card is available to anyone anywhere." />
                    <CardType title= "Liquid Card" balanceDuration = "12" offerDuration = "6" aprvalue = "33.9" transferFee = "2.7" creditAvailable= "3000" titleInfo="The Liquid card is a card available to customers who have an income of more than £16,000." />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home

