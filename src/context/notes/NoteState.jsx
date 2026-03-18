import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:3000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/getallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjliM2YxNjRiZWIzMWM2ZmQ4YmYzZWRkIn0sImlhdCI6MTc3MzQwMjA0M30.ydUOv31ET5O7-O042NZlBnjW3qCtjVSPio9OB8yRyac",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjliM2YxNjRiZWIzMWM2ZmQ4YmYzZWRkIn0sImlhdCI6MTc3MzQwMjA0M30.ydUOv31ET5O7-O042NZlBnjW3qCtjVSPio9OB8yRyac",
      },
      body: JSON.stringify({ title, description, tag }),
    });

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
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjliM2YxNjRiZWIzMWM2ZmQ4YmYzZWRkIn0sImlhdCI6MTc3MzQwMjA0M30.ydUOv31ET5O7-O042NZlBnjW3qCtjVSPio9OB8yRyac",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
