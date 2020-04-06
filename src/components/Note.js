import React from "react";
import styled from 'styled-components';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ButtonIcon from 'components/ButtonIcon';

const StyledNote = styled.div`
    position: relative;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px 30px 10px 10px;
    min-width: 250px;
    min-height: 100px;

    &:hover {
        box-shadow: 0 0 30px -15px rgba(0,0,0,0.5)
    }
`;

const StyledButtonIcon = styled(ButtonIcon)`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

const StyledTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
`;

const StyledParagraph = styled.p`
    font-size: 1.6rem;
    padding-top: 0.5rem;
`;

const Note = ({ id, title, content, props, onDelete }) => {

    const handleClick = () => {
        onDelete(id)
    }

    return (
        <StyledNote>
            <StyledTitle>{title}</StyledTitle>
            <StyledParagraph>{content}</StyledParagraph>
            <StyledButtonIcon onClick={handleClick}>
                <DeleteOutlineOutlinedIcon style={{ fontSize: "2.1rem" }} />
            </StyledButtonIcon>
        </StyledNote>
    );
}

export default Note;
