import { useEffect, useRef, useState } from "react";

function TodoList() {

  const inputRef = useRef(null);
  const listRef = useRef(null);

  const [task, setTask] = useState("");

  function getTasks() {

    return JSON.parse(
      localStorage.getItem("todoTasks") || "[]"
    );

  }

  function saveTasks(tasks) {

    localStorage.setItem(
      "todoTasks",
      JSON.stringify(tasks)
    );

  }

  function displayTasks() {

    const tasks = getTasks();

    const list = listRef.current;

    list.innerHTML = "";

    if (tasks.length === 0) {

      const emptyMessage =
        document.createElement("li");

      emptyMessage.textContent =
        "No tasks available.";

      emptyMessage.className =
        "empty-task";

      list.appendChild(emptyMessage);

      return;
    }

    tasks.forEach((taskItem) => {

      // Create list item using DOM
      const li =
        document.createElement("li");

      li.className = "task-item";

      // Create task text
      const span =
        document.createElement("span");

      span.textContent = taskItem.text;

      if (taskItem.completed) {

        span.classList.add("completed");

      }

      // Create Complete button
      const completeButton =
        document.createElement("button");

      completeButton.textContent =
        taskItem.completed
          ? "Undo"
          : "Complete";

      completeButton.className =
        "small-button";

      // Mark task completed
      completeButton.addEventListener(
        "click",
        () => {

          const updatedTasks =
            getTasks().map((item) => {

              if (item.id === taskItem.id) {

                return {
                  ...item,
                  completed: !item.completed
                };

              }

              return item;

            });

          saveTasks(updatedTasks);

          displayTasks();

        }
      );

      // Create Delete button
      const deleteButton =
        document.createElement("button");

      deleteButton.textContent =
        "Delete";

      deleteButton.className =
        "small-button delete";

      // Delete task
      deleteButton.addEventListener(
        "click",
        () => {

          const updatedTasks =
            getTasks().filter(
              (item) =>
                item.id !== taskItem.id
            );

          saveTasks(updatedTasks);

          displayTasks();

        }
      );

      const buttons =
        document.createElement("div");

      buttons.className =
        "task-buttons";

      buttons.appendChild(
        completeButton
      );

      buttons.appendChild(
        deleteButton
      );

      li.appendChild(span);

      li.appendChild(buttons);

      list.appendChild(li);

    });

  }

  function addTask() {

    const text = task.trim();

    if (text === "") {

      alert("Please enter a task.");

      return;

    }

    const tasks = getTasks();

    const newTask = {

      id: Date.now(),

      text: text,

      completed: false

    };

    tasks.push(newTask);

    saveTasks(tasks);

    setTask("");

    displayTasks();

    inputRef.current.focus();

  }

  useEffect(() => {

    displayTasks();

  }, []);

  return (
    <div className="content">

      <div className="aim-box">

        <h3>Aim</h3>

        <p>
          Build an interactive To-Do List using DOM
          methods to add tasks, mark tasks as completed
          and delete tasks dynamically.
        </p>

      </div>

      <div className="todo-container">

        <div className="todo-input">

          <input
            ref={inputRef}
            type="text"
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
            onKeyDown={(e) => {

              if (e.key === "Enter") {
                addTask();
              }

            }}
            placeholder="Enter a task..."
          />

          <button
            className="primary-button"
            onClick={addTask}
          >
            Add Task
          </button>

        </div>

        <ul
          ref={listRef}
          className="task-list"
        >
        </ul>

      </div>

    </div>
  );
}

export default TodoList;