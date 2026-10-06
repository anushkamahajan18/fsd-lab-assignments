import { useState } from "react";

function ControlledForm() {

  const [form, setForm] = useState({

    name: "",
    email: "",
    course: ""

  });

  function handleChange(e) {

    const {
      name,
      value
    } = e.target;

    setForm({

      ...form,

      [name]: value

    });

  }

  return (
    <div className="content">

      <div className="aim-box">

        <h3>Aim</h3>

        <p>
          Create a controlled React form that
          accepts user input and displays the
          entered data in real time.
        </p>

      </div>

      <div className="controlled-layout">

        <form className="registration-form">

          <label>

            Name

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

          </label>

          <label>

            Email

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

          </label>

          <label>

            Course

            <input
              type="text"
              name="course"
              value={form.course}
              onChange={handleChange}
              placeholder="Enter your course"
            />

          </label>

        </form>

        <div className="live-output">

          <p className="card-label">
            LIVE OUTPUT
          </p>

          <h3>
            {form.name || "Your Name"}
          </h3>

          <p>
            <strong>Email:</strong>{" "}
            {form.email || "Not entered"}
          </p>

          <p>
            <strong>Course:</strong>{" "}
            {form.course || "Not entered"}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ControlledForm;