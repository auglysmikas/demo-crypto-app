import React from 'react';
import './CoinItem.css'

const CoinItem = ({coins}) => {
    return (
        <div className='coinRow'>
        <p>{coins.market_cap_rank}</p>
            <div className="imgSymbol">
                <img src={coins.image} alt=""/>
                <p>{coins.symbol.toUpperCase()}</p>
            </div>
            <p>$ {coins.current_price.toLocaleString()}</p>
            { coins.price_change_percentage_24h>=0 ?
                <p className='green'>{coins.price_change_percentage_24h.toFixed(1)} %</p>
                : <p className='red'>{coins.price_change_percentage_24h.toFixed(1)} %</p> }
            <p className="hideMobile">{coins.total_volume.toLocaleString()}</p>
            <p className="hideMobile">{coins.market_cap.toLocaleString()}</p>
        </div>
    );
};

export default CoinItem;