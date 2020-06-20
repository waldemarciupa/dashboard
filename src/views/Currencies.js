import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Line } from "react-chartjs-2";

const latestEndpoint = 'https://api.exchangeratesapi.io/latest';
const historyEndpoint = 'https://api.exchangeratesapi.io/history';

const today = new Date();
const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

const formatedToday = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const formatedWeekAgo = weekAgo.getFullYear() + "-" + (weekAgo.getMonth() + 1) + "-" + weekAgo.getDate();

const formatedMonthAgo = monthAgo.getFullYear() + "-" + (monthAgo.getMonth() + 1) + "-" + monthAgo.getDate();

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
    min-height: 100vh;
    padding: 10px;
    background: lightgray;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const StyledCurrenciesContainer = styled.div`
    width: 100%;
    background: lightgrey;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledCurrenciesForm = styled.form`
    width: 70%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    font-size: 3rem;
    text-align: center;
    font-weight: 600;
    margin-top: 2rem;
    padding: 2rem 0;
    grid-gap: 2rem;
`;

const StyledChartContainer = styled.div`
    width: 80%;
    margin: 0 auto;

    @media(max-width: 768px) {
        width: 90%;
    }

    @media(max-width: 576px) {
        width: 100%;
    }
`;

const StyledInput = styled.input`
    text-align: center;
    font-size: 2.4rem;
`;

const StyledButtonsContainer = styled.div`
    margin-top: 10px;
    text-align: center;
`;

const StyledButton = styled.button`
    width: 100px;
    height: 25px;
    border-radius: 5px;
    background: rgba(57,91,119,1);
    margin: 5px;
    border: none;
    font-weight: 600;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: rgb(33, 53, 69);
    }

    &:active {
        transform: scale(0.9);
    }
`;

const Currencies = () => {

    const [data, setData] = useState({});

    const [options] = useState(currenciesArray);

    const [ratesByBase] = useState({});

    const [fromInput, setFromInput] = useState(1);
    const [toInput, setToInput] = useState('');

    const [fromOption, setFromOption] = useState('USD');
    const [toOption, setToOption] = useState('USD');

    const [date, setDate] = useState(formatedMonthAgo);

    const fetchRates = async (base = 'USD') => {
        const res = await fetch(`${latestEndpoint}?base=${base}`);
        const rates = await res.json();
        return rates;
    };

    const fetchChartRates = async (base = 'USD') => {
        const res = await fetch(`${historyEndpoint}?start_at=${date}&end_at=${formatedToday}&base=${base}`);
        const rates = await res.json();
        return rates;
    };

    useEffect(() => {
        convert(fromInput, fromOption, toOption);
    }, [fromInput, fromOption, toOption]);

    useEffect(() => {
        getDataToChart(fromOption, toOption);
    }, [date, fromOption, toOption]);

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
    };

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

    const getDataToChart = async (from, to) => {
        const rates = await fetchChartRates(from);
        const ratesRates = Object.keys(rates.rates).sort();
        const ratesObjectValues = Object.values(rates.rates);
        const ratesArray = ratesObjectValues.map(e => {
            return e[to];
        });

        setData({
            labels: ratesRates,
            datasets: [
                {
                    label: from,
                    data: ratesArray,
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: 'rgba(57,91,119,1)',
                    lineTension: 0.2,
                    pointHoverRadius: 8,
                    spanGaps: false,
                }
            ]
        });
    };

    const Chart = () => {
        return (
            <Line data={data} />
        )
    };

    return (
        <StyledWrapper>
            <StyledCurrenciesContainer>
                <h3>{fromInput} {fromOption} is</h3>
                <h2>{toInput}</h2>
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
            <StyledChartContainer>
                <Chart />
            </StyledChartContainer>
            <StyledButtonsContainer>
                <StyledButton onClick={() => { setDate(formatedWeekAgo) }}>7 days</StyledButton>
                <StyledButton onClick={() => { setDate(formatedMonthAgo) }}>1 month</StyledButton>
            </StyledButtonsContainer>
        </StyledWrapper>
    )
}

export default Currencies;