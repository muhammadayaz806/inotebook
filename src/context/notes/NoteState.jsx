import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "69b68c71e147d66bc266803e",
      user: "69b3f164beb31c6fd8bf3edd",
      title: "My Note",
      description: "qwerty",
      tag: "general",
      date: "2026-03-15T10:39:45.818Z",
      __v: 0,
    },
    {
      _id: "69b83be3746854e6da362631",
      user: "69b3f164beb31c6fd8bf3edd",
      title: "My Note 123",
      description: "qwerty",
      tag: "general",
      date: "2026-03-16T17:20:35.837Z",
      __v: 0,
    },
    {
      _id: "69b83be3746854e6da362631",
      user: "69b3f164beb31c6fd8bf3edd",
      title: "My Note 123",
      description: "qwerty",
      tag: "general",
      date: "2026-03-16T17:20:35.837Z",
      __v: 0,
    },
    ,
    {
      _id: "69b83be3746854e6da362631",
      user: "69b3f164beb31c6fd8bf3edd",
      title: "My Note 123",
      description: "qwerty",
      tag: "general",
      date: "2026-03-16T17:20:35.837Z",
      __v: 0,
    },
    ,
    {
      _id: "69b83be3746854e6da362631",
      user: "69b3f164beb31c6fd8bf3edd",
      title: "My Note 123",
      description: "qwerty",
      tag: "general",
      date: "2026-03-16T17:20:35.837Z",
      __v: 0,
    },
    ,
    {
      _id: "69b83be3746854e6da362631",
      user: "69b3f164beb31c6fd8bf3edd",
      title: "My Note 123",
      description: "qwerty",
      tag: "general",
      date: "2026-03-16T17:20:35.837Z",
      __v: 0,
    },
    ,
    {
      _id: "69b83be3746854e6da362631",
      user: "69b3f164beb31c6fd8bf3edd",
      title: "My Note 123",
      description: "qwerty",
      tag: "general",
      date: "2026-03-16T17:20:35.837Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  const addNote = (title, description, tag) => {
    const note = {
      _id: "69b83be3746854e6da36263156",
      user: "69b3f164beb31c6fd8bf3edd",
      title: title,
      description: description,
      tag: tag,
      date: "2026-03-16T17:20:35.837Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  }

  const deleteNote = (id) => {

  }

  const editNote = (id) => {
    
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
