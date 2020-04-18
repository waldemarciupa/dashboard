import React, { useState } from "react";
import styled from 'styled-components';
import ButtonIcon from 'components/ButtonIcon';
import AddIcon from '@material-ui/icons/Add';

const StyledForm = styled.form`
    position: relative;
    max-width: 480px;
    margin: 30px auto 20px auto;
    background: #fff;
    padding: 15px;
    border-radius: 7px;
    /* box-shadow: 0 2px 5px #ccc; */
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
        <div>
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
        </div>
    );
}

export default CreateNote;
