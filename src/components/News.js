import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StyledTitle from 'components/StyledTitle.js';

const StyledNewsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: .2rem;
    padding: .2rem;
    background: linear-gradient(90deg, #f7c626 15%, #f68c2f 40%, #e5127d 85%);

    /* align-items: center; */
`;

const StyledNewsCard = styled.div`
`;

const StylednNewsLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};
`;

const StyledNewsImage = styled.div`
    width: 100%;
    height: 220px;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 
`;

const StylednNewsTitle = styled.p`
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding: 2px 5px 0px 5px;
    font-size: 1.2rem;
    font-weight: 600;
    background-color: rgba(0,0,0,0.8);
    

    &:hover {
    text-decoration: underline;
    }

`;

const News = () => {

    const [news, setNews] = useState([])

    const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=11ef5bf7a6f04d5995125a5044948ee2' +
        '&pageSize=6';
    const req = new Request(url);

    useEffect(() => {
        fetch(req)
            .then(res => res.json())
            .then(res => {
                console.log(res);

                setNews(res.articles)
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
                                    <StyledNewsImage style={{ backgroundImage: `url(${e.urlToImage})` }} />
                                    {/* <StylednNewsTitle>
                                            {/* {e.title.substring(0, 80)}... */}
                                    {/* {e.title}
                                        </StylednNewsTitle> */}
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