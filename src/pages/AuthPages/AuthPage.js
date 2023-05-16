import SignUpForm from "../../component/SignUpForm/SignUpForm";
import LoginForm from "../../component/LogInForm/LoginForm";

export default function AuthPage({ setUser }) {
  return (
    <>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </>
  );
}
