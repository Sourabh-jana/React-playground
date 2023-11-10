import React from "react";

import { Link, Outlet } from "react-router-dom";

const ListHook = () => {
  return (
    <div className="flex min-w-full flex-col items-center gap-5">
      <div>
        <ul className="navbar">
          <li>
            <Link to="/hooks/useState">useState</Link>
          </li>
          <li>
            <Link to="/hooks/useEffect">useEffect</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default ListHook;
