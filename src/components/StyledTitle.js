import styled from 'styled-components';

const StyledTitle = styled.p`
    margin: 2rem auto;
    font-size: 2rem;
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 2rem;
    align-items: center;
    color: #fff;

    &:before, &:after {
        content: '';
        height: .5rem;
        display: block;
        background: linear-gradient(to left, transparent, #f7c626 15%,#f68c2f 45%, #e5127d 65%, transparent);
    }

    &:after {
        background: linear-gradient(to right, transparent, #f7c626 15%,#f68c2f 45%, #e5127d 65%, transparent);
    }
`;

export default StyledTitle;