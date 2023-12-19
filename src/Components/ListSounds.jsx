import { Navigate } from "react-router-dom";
import { useRecoilValue, atom } from "recoil";

const loginState = atom({
  key: "loginState",
  default: false,
});

const jwtState = atom({
  key: "jwtState",
  default: "",
});
const ListSounds = () => {
  const token = useRecoilValue(jwtState);
  const login = useRecoilValue(loginState);
  if (login !== true) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div>
      <h1>
        You are logged in with the following JWT Token :<br></br>
        {token}
      </h1>
    </div>
  );
};
export default ListSounds;
