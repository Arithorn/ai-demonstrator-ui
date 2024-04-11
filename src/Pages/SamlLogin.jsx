const SamlLogin = () => {
  const handleLogin = () => {
    //Redirect to SAML Login
    window.location.href = "https://mc.manbatcave.com:5173/auth/saml";
  };
  return (
    <div>
      <button onClick={handleLogin}>Login with SAML</button>
    </div>
  );
};
export default SamlLogin;
