const handleLogin = (returnUrl) => {
  const token = localStorage.getItem("token");
  if (token !== null) {
    return { isLoggedIn: true, token };
  }
  return { isLoggedIn: false, token: null };
};
export { handleLogin };
