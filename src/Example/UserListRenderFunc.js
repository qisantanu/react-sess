import React, { useState, useEffect } from "react";
import axios from "axios";
import "./userStyles.css";

function UserListRenderFunc() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("inside useEffect");
    axios.get("https://reqres.in/api/users").then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  const renderTableData = () => {
    return users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.email}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <h1>List of users (Functional)</h1>

      <table id="users">
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </>
  );
}
/*
class UserListRenderFunc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    console.log("inside component did mount");
    axios.get("https://reqres.in/api/users").then((res) => {
      const users = res.data.data;
      this.setState({ users });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("inside should component update");
    return nextState.users.length > 0;
  }

  renderTableData() {
    return this.state.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.email}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      );
    });
  }

  deleteLastRow() {
    let users = this.state.users;
    users.pop();
    this.setState({ users });
  }

  render() {
    return (
      <>
        <h1>List of users (Functional)</h1>
        <button className="deleteUser" onClick={() => this.deleteLastRow()}>
          Delete last user
        </button>
        <table id="users">
          <thead>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </>
    );
  }
}
*/
export default UserListRenderFunc;
