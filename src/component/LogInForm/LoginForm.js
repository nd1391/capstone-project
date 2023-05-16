import { useState } from "react";
import * as usersService from "../../utilities/users-service.js";
export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const [error, setError] = useState("");

  // The object passed to setState is merged with the current state object
  //   handleChange = (evt) => {
  //     this.setState({
  //       [evt.target.name]: evt.target.value,
  //       error: "",
  //     });
  //   };

  function handleChange(evt) {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value,
    });
  }

  async function handleSubmit(evt) {
    //prevent form from being submitted to the server//
    evt.preventDefault();
    console.log("in handlesubmit");
    console.log(credentials);
    try {
      const user = await usersService.login(credentials);
      console.log(user);
      setUser(user);
    } catch (err) {
      setError("Log in failed - Try Again");
    }
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}
