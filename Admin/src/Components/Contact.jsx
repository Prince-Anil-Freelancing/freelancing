import { useDispatch, useSelector } from "react-redux";
import { ContactDelete, ContactGet } from "../redux/reducer";
import { useEffect } from "react";
function Contact() {
  const { pending, contact, contactd } = useSelector((state) => state.pa);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ContactGet());
  }, []);
  useEffect(() => {
    dispatch(ContactGet());
  }, [contactd]);
  return (
    <>
      {localStorage.getItem("authtoken") &&
        (pending === false ? (
          <table className="App-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            {contact && contact.success === true ? (
              <tbody>
                {contact.contact.map((e) => {
                  const id = e._id;
                  return (
                    <tr key={id}>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.message}</td>
                      <td>{e.updatedAt.slice(0, 10)}</td>
                      <td>
                        <button
                          type="button"
                          className="action-button"
                          onClick={() => {
                            dispatch(ContactDelete(id));
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <p style={{ textAlign: "center" }}>Data Not Found!</p>
            )}
          </table>
        ) : (
          "Loading"
        ))}
    </>
  );
}

export default Contact;
