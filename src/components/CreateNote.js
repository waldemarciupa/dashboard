import React, { useState } from "react";
import styled from 'styled-components';
import ButtonIcon from 'components/ButtonIcon';
import AddIcon from '@material-ui/icons/Add';

const StyledForm = styled.form`
    position: relative;
    max-width: 480px;
    margin: 3rem auto 2rem auto;
    background: #fff;
    padding: 15px;
    border-radius: 7px;

    @media (max-width: 485px) {
        margin: 3rem 2rem 2rem 2rem;
        position: inherit;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
`;

const CreateNote = ({ onAdd, notes }) => {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }


    const submitNote = (event) => {
        event.preventDefault();

        if (!(note.content || note.title)) return null;

        onAdd(note);

        setNote({
            title: "",
            content: ""
        });

    }

    const expand = () => {
        setExpanded(true);
    }

    return (
        <StyledForm>
            {isExpanded && <StyledInput
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
            />}
            <StyledTextarea
                name="content"
                onClick={expand}
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows={isExpanded ? 3 : 1}
            />
            <ButtonIcon onClick={submitNote}>
                <AddIcon style={{ fontSize: "2.2rem" }} />
            </ButtonIcon>
        </StyledForm>
    );
}

export default CreateNote;
