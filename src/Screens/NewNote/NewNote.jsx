import { faArrowLeft, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";
import { useState } from "react";
import { addData } from "../../Utils/TaskData";

const NewNote = () => {
  const [title, setTitle] = useState("");

  const onSave = () => {
    if (title.trim() !== "") {
      addData(title);
      setTitle("");
    } else {
      console.log("Title cannot be empty");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="app">
          <div className="heading NewNote">
            <div className="NewNoteHeading">
              <Link to="/">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
              <button onClick={onSave} className="saveTaskBtn" type="button">
                <FontAwesomeIcon icon={faFloppyDisk} />
              </button>
            </div>
            <div className="addTask">
              <Input
                className="titleInput"
                type="text"
                placeholder="Title"
                value={title}
                maxLength={15}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                className="descInput"
                type="text"
                placeholder="Type Your Description Here...."
                maxLength={100}
              />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default NewNote;
