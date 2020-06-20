import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const endpoint = 'https://api.exchangeratesapi.io/latest';

const currencies = {
    USD: 'United States Dollar',
    EUR: 'Euro',
    PLN: 'Polish Zloty',
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
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
};

const currenciesArray = Object.entries(currencies);

const StyledWrapper = styled.div`
    width: 100%;
    height: 100vh;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
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
        grid-template-columns: 100px 1fr 1fr 1fr;
        grid-auto-rows: 1fr;
        font-size: 3rem;
        text-align: center;
        font-weight: 600;
        padding: 2rem;
        margin-top: 2rem;
        grid-gap:2rem;
        align-items: stretch;
`;

const StyledInput = styled.input`
    text-align: center;
`;

const Currencies = () => {
    const [options] = useState(currenciesArray);

    const [ratesByBase] = useState({});

    const [fromInput, setFromInput] = useState(1);
    const [toInput, setToInput] = useState('');

    const [fromOption, setFromOption] = useState('USD');
    const [toOption, setToOption] = useState('USD');

    const fetchRates = async (base = 'USD') => {
        const res = await fetch(`${endpoint}?base=${base}`);
        const rates = await res.json();
        return rates;
    }

    useEffect(() => {
        convert(fromInput, fromOption, toOption);
    }, [fromInput, fromOption, toOption]);

    const handleChangeFrom = (event) => {
        setFromInput(event.target.value);
    };

    const handleChangeFromOption = (event) => {
        setFromOption(event.target.value);
    };

    const handleChangeToOption = (event) => {
        setToOption(event.target.value);
    };

    const formatCurrency = (amount, currency) => {
        return Intl.NumberFormat('en-US', {
            style: 'currency',
            currency
        }).format(amount);
    }

    const convert = async (amount, from, to) => {
        if (!ratesByBase[from]) {
            const rates = await fetchRates(from);
            ratesByBase[from] = rates;
        }
        const rate = ratesByBase[from].rates[to];
        const convertedAmount = rate * amount;
        const a = formatCurrency(convertedAmount, to);
        setToInput(a);
    };

    return (
        <StyledWrapper>
            <StyledCurrenciesContainer>
                <h1>{fromInput} {fromOption} is</h1>
                <p>{toInput}</p>
                <StyledCurrenciesForm>
                    <StyledInput
                        type="number"
                        name="from"
                        value={fromInput}
                        onChange={handleChangeFrom}
                    />
                    <select
                        value={fromOption}
                        onChange={handleChangeFromOption}
                    >
                        {
                            options.map(([currencyCode, currencyName]) => <option value={currencyCode} key={currencyCode}>{currencyCode} - {currencyName}</option>)
                        }
                    </select>
                    <p>in</p>
                    <select
                        value={toOption}
                        onChange={handleChangeToOption}
                    >
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