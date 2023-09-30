import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsersList = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const fetchUsers = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseURL, inputs)
      .then((response) => {
        setUsers([response.data, ...users]);
        setInputs({
          id: users.length + 1,
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (id) => {
    const editedUser = users.find((user) => user.id === id);
    setInputs({
      id: editedUser.id,
      name: editedUser.name,
      email: editedUser.email,
      phone: editedUser.phone,
    });
    // setUsers([...users, editedUser]);
  };
  const handleUpdate = () => {
    axios
      .put(`${baseURL}/${inputs.id}`, inputs)
      .then((response) => {
        setUsers(
          users.map((user) => (user.id === inputs.id ? response.data : user))
        );
        setInputs({
          id: users.length + 1,
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${baseURL}/${id}`)
      .then((response) => {
        setUsers(users.filter((user) => user.id !== id));
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <h2 className="my-3 text-center">List of Users</h2>
      </div>

      <div className="container">
        <h2>Input Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              className="form-control mb-3"
              name="phone"
              value={inputs.phone}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
          <button
            type="submit"
            className="btn btn-secondary ms-1"
            onClick={() => handleUpdate(id)}
          >
            Update
          </button>
        </form>
      </div>
      <hr />
      <div className="container-fluid">
        <table className="table table-striped table-bordered table-dark table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-1"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UsersList;
