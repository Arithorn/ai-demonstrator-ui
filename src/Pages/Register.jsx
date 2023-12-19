import RegisterForm from "../Components/RegisterForm";
import HandleRegister from "../Handlers/handleRegister";
const Register = () => {
  return <RegisterForm registerHandler={HandleRegister} />;
};

export default Register;
