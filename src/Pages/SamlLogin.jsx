import config from "../config";
import { handleLogin } from "../Handlers/handleLogin";
import { Button } from "semantic-ui-react";
const SamlLogin = () => {
  const handleLoginClick = () => {
    //Redirect to SAML Login
    window.location.href = `${config.url}/auth/saml`;
  };
  const handleLogout = () => {
    // Log User Out
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const { isLoggedIn } = handleLogin("");
  if (isLoggedIn) {
    return (
      <div>
        <Button onClick={handleLogout} color="red">
          Log Out
        </Button>
      </div>
    );
  } else
    return (
      <div>
        <Button onClick={handleLoginClick} color="teal">
          Login with SAML
        </Button>
      </div>
    );
};
export default SamlLogin;
