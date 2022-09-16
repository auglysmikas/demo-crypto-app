import {useState, useEffect} from 'react';
import './Coin.css'
import axios from "axios";
import {useParams} from "react-router-dom";

const Coin = () => {

    const [coin, setCoin] = useState({})

    const params = useParams()

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(()=>{
        axios.get(url).then((res)=>{
            setCoin(res.data)
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])

    return (
        <div className='container'>
            <div className="coin">
                <div className="content">
                    <h1>{coin.name}</h1>
                </div>
                <div className="content">
                    <div className="rank">
                        <div className="rankBtn">Rank # {coin.market_cap_rank}</div>
                    </div>
                    <div className="info">
                        <div className="coinHeading">
                            { coin.image ?  <img src={coin.image.small} alt="photo"/> : null}
                            <p>Symbol: {coin.symbol}</p>
                        </div>
                        <div>
                            {coin.market_data ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <table>
                        <thead>
                        <tr>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th>14d</th>
                            <th>30d</th>
                            <th>1yr</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Coin;