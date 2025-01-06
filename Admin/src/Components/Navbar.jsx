import { Link } from "react-router-dom";
import { MdSpaceDashboard, MdConnectWithoutContact } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authtoken")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      {localStorage.getItem("authtoken") ? (
        <nav className="App-sidebar">
          <ul>
            <Link to="/">
              <li>
                <MdSpaceDashboard />
                <span>DashBoard</span>
              </li>
            </Link>
            <li>
              <AiFillProject />
              <span>Project</span>
            </li>
            <li>
              <FaPersonMilitaryToPerson />
              <span>Member</span>
            </li>
            <Link to="/contact">
              <li>
                <MdConnectWithoutContact />
                <span>Contact</span>
              </li>
            </Link>
            <li
              onClick={() => {
                localStorage.removeItem("authtoken");
                localStorage.clear();
                if (!localStorage.getItem("authtoken")) {
                  navigate("/login");
                }
              }}
            >
              <FaPersonMilitaryToPerson />
              <span>Logout</span>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
