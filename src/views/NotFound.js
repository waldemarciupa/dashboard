import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;
const NotFound = () => {
    return (
        <StyledNotFound>Error 404, page not found...</StyledNotFound>
    )
}

export default NotFound;