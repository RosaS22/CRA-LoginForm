import React from 'react';

// Functional component for the login form
function LoginForm() {
  return (
    <div className="login-form">
      {/* Header for the login form */}
      <h3>Log In</h3>

      {/* Simple form with username and password fields */}
      <form>
        <div>
          {/* Label and input for the username */}
          <label>Username: </label>
          <input type="text" name="username" />
        </div>
        <div>
          {/* Label and input for the password */}
          <label>Password: </label>
          <input type="password" name="password" />
        </div>
        {/* Submit button for the form */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Export the component for use in other parts of the app
export default LoginForm;
