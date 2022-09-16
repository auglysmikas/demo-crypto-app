import React from 'react';
import CoinItem from "./CoinItem";
import Coin from "./Coin";
import "./Coins.css"
import { Link } from 'react-router-dom'


const Coins = ({coins}) => {
    return (
        <div className='container'>
            <div>
                <div className="heading">
                    <p style = {{marginLeft : 30 }}>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hideMobile'>Volume</p>
                    <p className='hideMobile'>Market Cap</p>
                </div>

                {coins.map((x,i)=>
                    <Link to={`/coin/${x.id}`} element={<Coin/>} key={x.id}>
                        <CoinItem key={i}  coins={x}/>
                    </Link>

                )}

            </div>
        </div>
    );
};

export default Coins;