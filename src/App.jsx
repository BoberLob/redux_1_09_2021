import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchCustomers } from './asyncAction/customers';
import {
  asyncIncrementCreator,
  asyncDecrementCreator,
  fetchUsers,
} from "./redux/actions";
import "./App.css";

const App = () => {
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="count">{count}</div>

      <div className="btns">
        <button
          className="btn"
          onClick={() => dispatch(asyncIncrementCreator())}
        >
          increment++
        </button>
        <button
          className="btn"
          onClick={() => dispatch(asyncDecrementCreator())}
        >
          decrement-
        </button>
        <button className="btn" onClick={() => dispatch(fetchUsers())}>
          Get Users
        </button>
      </div>

      <div className="users">
        {users.map((user) => (
          <div className="user">{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
