import React, { useState, useEffect } from 'react';
import CreateNote from 'components/CreateNote.js';
import Note from "components/Note";
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    align-items: center;
    padding: 3rem;
`;

const Notes = () => {



    const localDb = localStorage.getItem("notes");

    const startNotes = (localDb.length > 0) ? JSON.parse(localDb) : [];

    const [notes, setNotes] = useState(startNotes);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])

    const addNote = (newNote) => {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })


    }

    const deleteNote = (id) => {

        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })


    }

    return (
        <>
            <CreateNote onAdd={addNote} notes={notes} />
            <StyledWrapper>
                {
                    notes.map((noteItem, index) => {
                        return (
                            <Note
                                key={index}
                                id={index}
                                title={noteItem.title}
                                content={noteItem.content}
                                onDelete={deleteNote}
                            />
                        );
                    })
                }
            </StyledWrapper>
        </>
    )
}

export default Notes;