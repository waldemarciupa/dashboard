import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GBP from 'assets/images/GBP.png';
import USD from 'assets/images/USD.png';
import AUD from 'assets/images/AUD.png';
import CAD from 'assets/images/CAD.png';
import EUR from 'assets/images/EUR.png';
import HUF from 'assets/images/HUF.png';
import CHF from 'assets/images/CHF.png';
import JPY from 'assets/images/JPY.png';
import CZK from 'assets/images/CZK.png';
import DKK from 'assets/images/DKK.png';
import NOK from 'assets/images/NOK.png';
import SEK from 'assets/images/SEK.png';

const StyledCurencyWrapper = styled.div`
    color: #fff;
    margin: 7rem .5rem 0;
`;

const StyledCurency = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const StyledCurencyTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledCurrencyValue = styled.div`
    display: flex;
    flex-direction: column;
`;

const Currency = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.nbp.pl/api/exchangerates/tables/C/?format=json')
            .then(res => res.json())
            .then(res =>
                setData(res[0].rates)
            )
            .catch(err => console.log(err))
    }, [])

    return (
        <StyledCurencyWrapper>
            {
                data.map((e, i) => {
                    const askToFixed = e.ask;
                    return (
                        <StyledCurency key={e.code}>
                            <StyledCurencyTitle>
                                {e.code === "GBP" && <img src={GBP} alt="GBP" />}
                                {e.code === "USD" && <img src={USD} alt="USD" />}
                                {e.code === "AUD" && <img src={AUD} alt="AUD" />}
                                {e.code === "CAD" && <img src={CAD} alt="CAD" />}
                                {e.code === "EUR" && <img src={EUR} alt="EUR" />}
                                {e.code === "HUF" && <img src={HUF} alt="HUF" />}
                                {e.code === "CHF" && <img src={CHF} alt="CHF" />}
                                {e.code === "JPY" && <img src={JPY} alt="JPY" />}
                                {e.code === "CZK" && <img src={CZK} alt="CZK" />}
                                {e.code === "DKK" && <img src={DKK} alt="DKK" />}
                                {e.code === "NOK" && <img src={NOK} alt="NOK" />}
                                {e.code === "SEK" && <img src={SEK} alt="SEK" />}

                                <p>{e.code}</p>
                            </StyledCurencyTitle>
                            <StyledCurrencyValue>
                                {/* <p>Bid: {e.bid}</p> */}
                                <p> {askToFixed.toFixed(2)} zł</p>
                            </StyledCurrencyValue>

                        </StyledCurency>
                    )
                })
            }
        </StyledCurencyWrapper>
    )
}

export default Currency;