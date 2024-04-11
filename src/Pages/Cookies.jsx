import { useCookies } from "react-cookie";

const Cookies = () => {
  // Fetch cookies data from an API or any other source
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  console.log("cookes", cookies);
  return (
    <div>
      <h1>Cookies</h1>
      <ul>
        {/* {cookies.map((cookie) => (
          <li key={cookie.id}>
            <h3>{cookie.name}</h3>
            <p>{cookie.description}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Cookies;
