import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const endpoint = 'https://api.exchangeratesapi.io/latest';

const currencies = {
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HKD: 'Hong Kong Dollar',
    HRK: 'Croatian Kuna',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
    EUR: 'Euro',
};

const currenciesArray = Object.entries(currencies);

const StyledWrapper = styled.div`
    width: 100%;
    height: 100vh;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledCurrenciesContainer = styled.div`
    width: 650px;
    height: 250px;
    background: lightgrey;
    font-size: 3rem;
        text-align: center;
`;

const StyledCurrenciesForm = styled.form`
        display: grid;
        grid-template-columns: auto 1fr;
        grid-auto-rows: 1fr;
        font-size: 3rem;
        text-align: center;
        font-weight: 600;
        padding: 2rem;
        margin-top: 2rem;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        grid-gap:2rem;
        align-items: stretch;
`;

const Currencies = () => {
    const [options] = useState(currenciesArray);

    useEffect(() => {
        const fetchRates = async (base = 'EUR') => {
            const res = await fetch(`${endpoint}?base=${base}`);
            const rates = await res.json();
            console.log(rates);
        }
        fetchRates();
    }, []);

    return (
        <StyledWrapper>
            <StyledCurrenciesContainer>
                <h1>1 euro is </h1>
                <p>4,50 zł</p>
                <StyledCurrenciesForm>
                    <input type="number" name="from" />
                    <select>
                        {
                            options.map(([currencyCode, currencyName]) => <option value={currencyCode} key={currencyCode}>{currencyCode} - {currencyName}</option>)
                        }
                    </select>
                    <input type="number" name="from" />
                    <select>
                        {
                            options.map(([currencyCode, currencyName]) => <option value={currencyCode} key={currencyCode}>{currencyCode} - {currencyName}</option>)
                        }
                    </select>
                </StyledCurrenciesForm>
            </StyledCurrenciesContainer>
        </StyledWrapper>
    )
}

export default Currencies;