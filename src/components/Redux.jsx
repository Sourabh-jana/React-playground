import { useSelector } from "react-redux";
import Account from "./Account";
import Bonus from "./Bonus";
import { Suspense, lazy } from "react";
import { Counter } from "./counter/Counter";
const Posts = lazy(() => import("./Posts"));

const Redux = () => {
  // const amount = useSelector((state) => state.account.amount);
  // const points = useSelector((state) => state.bonus.points);
  return (
    <div className="flex flex-col items-center border">
      {/* <h1 className="text-xl">Account: {amount}</h1>
      <h1 className="text-xl">Bonus: {points}</h1> */}
      {/* <Account />
      <Bonus />
      <Suspense fallback="<h1>Loading</h1>">
        <Posts />
      </Suspense> */}
      <Counter />
    </div>
  );
};

export default Redux;
