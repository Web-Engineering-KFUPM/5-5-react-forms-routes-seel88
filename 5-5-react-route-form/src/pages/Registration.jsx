import { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  // 1) Add new state variables for password and gender
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 4) Validate all fields are mandatory and validate email
    const nextErrors = {};

    // Email validation: required, must contain "@" and end with ".com"
    if (!email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!(email.includes("@") && email.endsWith(".com"))) {
      nextErrors.email = "Enter a valid email address (must contain @ and end with .com)";
    }

    // Password validation
    if (!password.trim()) {
      nextErrors.password = "Password is required";
    }

    // Gender validation
    if (!gender) {
      nextErrors.gender = "Please select your gender";
    }

    setErrors(nextErrors);

    // 7) SUCCESS ALERT: Show ONLY when the form passes validation
    if (Object.keys(nextErrors).length === 0) {
      alert(`User Registered: ${email}`);
    }
  };

  return (
    <section>
      <h1>Student Registration</h1>
      <p className="muted">
        Create your portal access. Your email will be used for course updates.
      </p>

      <form onSubmit={handleSubmit} className="card form neon">
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {/* 5) Show small error message under invalid input */}
          {errors.email && (
            <p id="email-error" className="error">{errors.email}</p>
          )}
        </div>

        {/* 2) Add password field inside a form-row */}
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* 3) Add gender selection inside the fieldset */}
        <fieldset className="form-row">
          <legend>Gender</legend>
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            /> Male
          </label>
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            /> Female
          </label>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </fieldset>

        {/* 6) Disable the submit button until all fields are filled */}
        <button 
          type="submit" 
          className="btn" 
          disabled={!email || !password || !gender}
        >
          Register
        </button>
      </form>

      <div className="card info">
        <h3>Why Register?</h3>
        <ul className="list">
          <li>📘 Access course materials & assignments</li>
          <li>💬 Join the discussion forum</li>
          <li>🎓 Track your progress & get certified</li>
        </ul>
      </div>
    </section>
  );
}