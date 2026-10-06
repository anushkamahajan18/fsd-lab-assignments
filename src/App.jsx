import { useState } from "react";

import Calculator from "./components/Calculator.jsx";
import TodoList from "./components/TodoList.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import ControlledForm from "./components/ControlledForm.jsx";
import Counter from "./components/Counter.jsx";

const assignments = [
  {
    id: 1,
    title: "Calculator",
    component: Calculator
  },
  {
    id: 2,
    title: "To-Do List",
    component: TodoList
  },
  {
    id: 3,
    title: "Form Validation",
    component: RegistrationForm
  },
  {
    id: 4,
    title: "Profile Card",
    component: ProfileCard
  },
  {
    id: 5,
    title: "Controlled Form",
    component: ControlledForm
  },
  {
    id: 6,
    title: "Counter",
    component: Counter
  }
];

function App() {
  const [activeAssignment, setActiveAssignment] = useState(1);

  const selectedAssignment = assignments.find(
    (assignment) => assignment.id === activeAssignment
  );

  const ActiveComponent = selectedAssignment.component;

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <p className="small-title">FSD LAB ASSIGNMENTS</p>

        <h1>JavaScript & React Projects</h1>

        <p>
          All six assignments combined into one interactive application.
        </p>
      </header>

      {/* Navigation */}
      <nav className="navigation">

        {assignments.map((assignment) => (
          <button
            key={assignment.id}
            className={
              activeAssignment === assignment.id
                ? "nav-button active"
                : "nav-button"
            }
            onClick={() => setActiveAssignment(assignment.id)}
          >
            <span>Assignment {assignment.id}</span>
            <strong>{assignment.title}</strong>
          </button>
        ))}

      </nav>

      {/* Main content */}
      <main className="main-container">

        <div className="assignment-header">

          <div>
            <p className="assignment-number">
              ASSIGNMENT {selectedAssignment.id}
            </p>

            <h2>{selectedAssignment.title}</h2>
          </div>

          <span className="badge">
            {selectedAssignment.id >= 4 ? "React" : "JavaScript"}
          </span>

        </div>

        <ActiveComponent />

      </main>

      {/* Footer */}
      <footer>
        <p>FSD Lab Assignments</p>
      </footer>

    </div>
  );
}

export default App;