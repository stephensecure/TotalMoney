import React from 'react';
import  CardType  from "./components/CardType.js";

const Home =() => {
    console.log("Home page")

      return (
        <>
            <div className="container_main"> 
                <div className="product_main">
                    <div className="product_name"> 
                        <h1 className= "header_main"> Welcome to Total Money, please select a card from our available cards </h1>
                    </div>
                    <div> 
                        <CardType title= "Student Card" balanceDuration = "0" offerDuration = "6" aprvalue = "18.9" transferFee = "2.7" creditAvailable= "1200" />
                        <CardType title= "Anywhere Card" balanceDuration = "0" offerDuration = "0" aprvalue = "33.9" transferFee = "2.7" creditAvailable= "300" />
                        <CardType title= "Liquid Card" balanceDuration = "12" offerDuration = "6" aprvalue = "33.9" transferFee = "2.7" creditAvailable= "3000" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

