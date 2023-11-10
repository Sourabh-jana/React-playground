import { useState } from "react";
import {
  balance_decrement,
  balance_increment,
  balance_increment_by_value,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Account = () => {
  const [val, setVal] = useState(0);
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center border">
      <h1>Amount: {amount}</h1>
      <div>
        <button onClick={() => dispatch(balance_increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(balance_decrement())}>
          Decrement
        </button>
        <input
          className="rounded-lg border-2 border-blue-500 px-2 py-1 focus-within:outline-none"
          type="number"
          onChange={(e) => setVal(+e.target.value)}
        />
        <button onClick={() => dispatch(balance_increment_by_value(val))}>
          Increment by {val}
        </button>
      </div>
    </div>
  );
};

export default Account;
