import { useParams, Navigate } from "react-router-dom";

const PostAuth = () => {
  const { token } = useParams();
  if (token) {
    localStorage.setItem("token", token);
    return <Navigate replace to="/" />;
  }
  return <Navigate replace to="/login2" />;
};

export default PostAuth;
