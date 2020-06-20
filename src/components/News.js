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
`;

const StyledNewsCard = styled.div`
    
`;

const StylednNewsLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};
`;

const StyledNewsImage = styled.div`
    width: 100%;
    height: 22rem;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 
    position: relative;

`;

const StyledNewsModal = styled.div`
    position: static;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.05) linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0) 30%,rgba(0,0,0,0.75) 100%);

    &:hover {
    background: rgba(0,0,0,0.00) linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0) 30%,rgba(0,0,0,1) 100%);
    }
    
`;

const StylednNewsTitle = styled.p`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 2px 5px 0px 5px;
    font-size: 1.2rem;
    font-weight: 600;
    
`;

// const News = () => {

//     const [news, setNews] = useState([])

//     const url = 'https://cors-anywhere.herokuapp.com/newsapi.org/v2/top-headlines?' +
//         'country=us&' +
//         'apiKey=954e1c4786714a47a2c676012c180c44' +
//         '&pageSize=15';

//     // const req = new Request(url);

//     useEffect(() => {
//         fetch(url)
//             .then(res => res.json())
//             .then(res => {
//                 setNews(res.articles)
//             }
//             )
//             .catch(err => console.log(err))
//     }, [])

//     if (!news) return '';

//     return (
//         <>
//             <StyledTitle>News</StyledTitle>
//             <StyledNewsWrapper>
//                 {
//                     news.map((e, i) => {
//                         return (
//                             <StyledNewsCard key={i}>
//                                 <StylednNewsLink target="blank" rel="noopener noreferrer" href={e.url} >
//                                     <StyledNewsImage style={{ backgroundImage: `url(${e.urlToImage})` }}>
//                                         <StyledNewsModal />
//                                         <StylednNewsTitle>
//                                             {e.title}
//                                         </StylednNewsTitle>
//                                     </StyledNewsImage>
//                                 </StylednNewsLink>
//                             </StyledNewsCard>
//                         )

//                     })
//                 }
//             </StyledNewsWrapper>
//         </>
//     )
// }

const News = () => {

    const [news, setNews] = useState([])

    const url = 'https://gnews.io/api/v3/search?q=example&token=f55cf07eeff83bf51f5de9a174f91dff&image=required';

    const req = new Request(url);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setNews(res.articles.slice(0, 9))
            }
            )
            .catch(err => console.log(err))
    }, [])

    if (!news) return '';

    return (
        <>
            <StyledTitle>News</StyledTitle>
            <StyledNewsWrapper>
                {
                    news.map((e, i) => {
                        return (
                            <StyledNewsCard key={i}>
                                <StylednNewsLink target="blank" rel="noopener noreferrer" href={e.url} >
                                    <StyledNewsImage style={{ backgroundImage: `url(${e.image})` }}>
                                        <StyledNewsModal />
                                        <StylednNewsTitle>
                                            {e.title}
                                        </StylednNewsTitle>
                                    </StyledNewsImage>
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