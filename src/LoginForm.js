import React from 'react';


function LoginForm() {
    return (
        <div className="login-form">
            <h3>Log In</h3>
            <form>
        <div>
            <label>Username: </label>
            <input type="text" name="username" />
        </div>
        <div>
            <label>Password: </label>
            <input type="password" name="password" />
        </div>
        <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default LoginForm;
