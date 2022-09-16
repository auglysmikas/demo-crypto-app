import {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Coins from "./components/Coins";
import NavBar from "./components/NavBar";
import Coin from "./components/Coin";

function App() {

    const [coins, setCoins] = useState([])

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCoins(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])

  return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>

                <Route path='/' element={<Coins coins={coins}/>}/>
                <Route path='/coin' element={<Coin/>}>
                    <Route path=':coinId' element={<Coin/>}/>
                </Route>

            </Routes>

        </BrowserRouter>


    </div>
  );
}

export default App;
