import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AdminLogin } from "../redux/reducer.js";
export default function Login() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });
  const { pending, admins } = useSelector((state) => state.pa);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AdminLogin(admin));
  };
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  return (
    <>
      {admins &&
        admins.success === true &&
        localStorage.getItem("authtoken") && <>{navigate("/")}</>}
      <div className="login">
        <form method="post" action="/" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="form-control"
              placeholder="Username...."
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          {pending === true && <p>Loading...</p>}
        </form>
      </div>
    </>
  );
}
