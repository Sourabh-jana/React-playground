import React, { lazy, Suspense, useState, useTransition } from "react";

const Admin = lazy(() => import("./Admin"));

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex flex-col items-center gap-3">
      <h1>Home Page</h1>
      <button
        onClick={() => {
          import("../utils/sum.js").then((m) => {
            alert(m.sum(2, 2));
          });
        }}
      >
        Add 2+2
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          console.log(isPending)
          startTransition(() => {
            setIsAdmin((prev) => !prev);
          });
        }}
      >
        Toggle Admin
      </button>
      {isPending && <h2 className="text-red-700">Loading...</h2>}
      {isAdmin ? (
        <Suspense fallback={<h1 className="text-blue-700">Loading...</h1>}>
          <Admin />
        </Suspense>
      ) : (
        <h2>Not Admin</h2>
      )}
    </div>
  );
};

export default Home;
