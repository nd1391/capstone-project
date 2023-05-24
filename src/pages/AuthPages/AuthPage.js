import SignUpForm from "../../component/SignUpForm/SignUpForm";
import LoginForm from "../../component/LogInForm/LoginForm";

export default function AuthPage({ setUser }) {
  return (
    <>
      <h1>Sign Up</h1>
      <SignUpForm setUser={setUser} />
      <h1>Login</h1>
      <LoginForm setUser={setUser} />
    </>
  );
}
