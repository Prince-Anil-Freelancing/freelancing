import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactTotal } from "../redux/reducer";
function Card() {
  const { pending, contactt } = useSelector((state) => state.pa);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactTotal());
  }, []);
  return (
    <>
      {localStorage.getItem("authtoken") &&
        (pending === false ? (
          <div className="home">
            <div className="card">
              <div className="card-content">
                <h2>{contactt.success === true ? contactt.total : "0"}</h2>
              </div>
            </div>
          </div>
        ) : (
          "Loading..."
        ))}
    </>
  );
}

export default Card;
