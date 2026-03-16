import NoteContext from "./noteContext";

const NoteState = (props) => {
    const state = {
        "name": "ayaz",
        "class": "10th"
    }
  return (
    <NoteContext.Provider value={{state}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
