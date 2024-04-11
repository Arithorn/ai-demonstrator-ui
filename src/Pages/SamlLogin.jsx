import config from "../config";
const SamlLogin = () => {
  const handleLogin = () => {
    //Redirect to SAML Login
    window.location.href = `${config.url}/auth/saml`;
  };
  return (
    <div>
      <button onClick={handleLogin}>Login with SAML</button>
    </div>
  );
};
export default SamlLogin;
