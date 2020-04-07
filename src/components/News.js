import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StyledTitle from 'components/StyledTitle.js';

const StyledNewsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px;
    align-items: center;
`;

const StyledNewsCard = styled.div`
   
`;

const StylednNewsLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};
    font-size: 1.6rem;
`;

const StyledNewsImageBox = styled.div`
        width: 100%;
        height: auto;
        background-color: transparent;
        position: relative;
`;

const StyledNewsImage = styled.img`
    width: 100%;
`;

const StylednNewsTitle = styled.p`
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding: 2px 5px 0px 5px;
    font-size: 1.4rem;
    font-weight: 600;
    background-color: rgba(0,0,0,0.8);

    &:hover {
    text-decoration: underline;
    }

`;

const News = () => {

    const [news, setNews] = useState([])

    const url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=11ef5bf7a6f04d5995125a5044948ee2';
    const req = new Request(url);

    useEffect(() => {
        fetch(req)
            .then(res => res.json())
            .then(res => {
                setNews(res.articles)
                console.log(res.articles)
            }
            )
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <StyledTitle>News</StyledTitle>
            <StyledNewsWrapper>
                {
                    news.map((e, i) => {
                        return (
                            <StyledNewsCard key={i}>
                                <StylednNewsLink target="blank" rel="noopener noreferrer" href={e.url} >
                                    <StyledNewsImageBox>
                                        <StyledNewsImage src={e.urlToImage} />
                                        <StylednNewsTitle>
                                            {/* {e.title.substring(0, 80)}... */}
                                            {e.title}
                                        </StylednNewsTitle>
                                    </StyledNewsImageBox>
                                </StylednNewsLink>
                            </StyledNewsCard>
                        )

                    })
                }
            </StyledNewsWrapper>
        </>
    )
}

export default News;