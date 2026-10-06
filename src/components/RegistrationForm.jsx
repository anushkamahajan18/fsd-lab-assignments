import { useState } from "react";

function RegistrationForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState("");

  function handleChange(e) {

    const {
      name,
      value
    } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    setSuccess("");

  }

  function validate() {

    const newErrors = {};

    // Name validation
    if (form.name.trim() === "") {

      newErrors.name =
        "Name is required.";

    }
    else if (form.name.trim().length < 3) {

      newErrors.name =
        "Name must contain at least 3 characters.";

    }

    // Email validation
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.email.trim() === "") {

      newErrors.email =
        "Email is required.";

    }
    else if (!emailPattern.test(form.email)) {

      newErrors.email =
        "Enter a valid email address.";

    }

    // Phone validation
    const phonePattern =
      /^[0-9]{10}$/;

    if (form.phone.trim() === "") {

      newErrors.phone =
        "Phone number is required.";

    }
    else if (!phonePattern.test(form.phone)) {

      newErrors.phone =
        "Phone number must contain 10 digits.";

    }

    // Password validation
    if (form.password === "") {

      newErrors.password =
        "Password is required.";

    }
    else if (form.password.length < 8) {

      newErrors.password =
        "Password must contain at least 8 characters.";

    }

    return newErrors;
  }

  function handleSubmit(e) {

    e.preventDefault();

    const validationErrors =
      validate();

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length === 0
    ) {

      setSuccess(
        "Registration successful!"
      );

    }

  }

  return (
    <div className="content">

      <div className="aim-box">

        <h3>Aim</h3>

        <p>
          Create a user registration form with
          name, email, phone and password fields
          and validate the inputs using JavaScript.
        </p>

      </div>

      <form
        className="registration-form"
        onSubmit={handleSubmit}
      >

        <label>
          Name

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          {errors.name && (
            <span className="field-error">
              {errors.name}
            </span>
          )}

        </label>

        <label>
          Email

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@email.com"
          />

          {errors.email && (
            <span className="field-error">
              {errors.email}
            </span>
          )}

        </label>

        <label>
          Phone

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10 digit phone number"
          />

          {errors.phone && (
            <span className="field-error">
              {errors.phone}
            </span>
          )}

        </label>

        <label>
          Password

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Minimum 8 characters"
          />

          {errors.password && (
            <span className="field-error">
              {errors.password}
            </span>
          )}

        </label>

        <button
          className="primary-button"
          type="submit"
        >
          Register
        </button>

        {success && (
          <p className="success">
            {success}
          </p>
        )}

      </form>

    </div>
  );
}

export default RegistrationForm;