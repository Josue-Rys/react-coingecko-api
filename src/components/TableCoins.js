import React from "react";
import RowCoin from "./RowCoin.js";

const titleTableCoins = ['#','Name','Price','Price Change','24h Volume']

const TableCoins = ({coins, search}) => {

    const filteredCoins = coins.filter(
        (coin) => 
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <table className="table table-dark mt-4 table-hover" >
            <thead>
                <tr>
                    {
                        titleTableCoins.map(title => (
                            <th key={title} > {title} </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    filteredCoins.map((coin, index) => (
                        <RowCoin coin={coin} key={coin.id} index={index}/>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TableCoins