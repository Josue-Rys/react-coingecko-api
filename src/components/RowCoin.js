import React from "react";
import { Tag } from "antd"

const RowCoin = ({coin, index}) => {
    /* console.log(coin) */
    return (
        <tr>
            <td> {index + 1} </td>
            <td>
                <img src={coin.image} alt={coin.name} style={{width: '3%'}} className= "img-fluid me-4" ></img>
                <span> {coin.name} </span>
                <span className="ms-3 text-muted text-uppercase" > {coin.symbol} </span>
            </td>
            <td> {coin.current_price} </td>
            <td>
                <Tag color={coin.price_change_percentage_24h > 0 ? '#0e4bef' : '#ff0000'} >{coin.price_change_percentage_24h}</Tag>
            </td>
            <td> {coin.total_volume} </td>
        </tr>
    )
}

export default RowCoin
