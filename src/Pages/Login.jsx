import LoginForm from "../Components/LoginForm";
import HandleLogin from "../Handlers/handleLogin";
const Login = () => {
  return <LoginForm loginHandler={HandleLogin} />;
};

export default Login;
