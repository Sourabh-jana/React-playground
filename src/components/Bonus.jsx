import { useDispatch, useSelector } from "react-redux";
import { bonus_increment } from "../actions";

const Bonus = () => {
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center border">
      <h1>Bonus: {points}</h1>
      <div>
        <button onClick={() => dispatch(bonus_increment())}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Bonus;
