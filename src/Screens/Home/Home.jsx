import { Link } from "react-router-dom";
import BodyImage from "../../assets/Images/CreateNotes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { data, getData } from "../../Utils/TaskData";
import Task from "../../Components/Task/Task";

const Home = () => {
  const tasks = data.map((item) => <Task key={item.id} {...item} />);

  return (
    <section>
      <div className="container">
        <div className="app">
          <div className="heading">
            <h1>Notes</h1>
          </div>
          <div className="app--body">
            {data.length === 0 ? (
              <div className="emptyTask">
                <img src={BodyImage} alt="body--image" />
                <h4>Create Your First Note</h4>
              </div>
            ) : (
              <ul className="task--list" type="none">
                {tasks}
              </ul>
            )}
          </div>
          <div className="app--footer">
            <Link className="addNewTaskButton" to="/addNewNote">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
