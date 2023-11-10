import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
// import { Outlet, Link } from "react-router-dom";
// import { Suspense } from "react";
// import TestUseState from "./hooks/useState/TestUseState";
// import Redux from "./components/Redux";

// import { Provider } from "react-redux";
// import store from "./store";

// import counterReducer from "./components/counter/counterSlice";

// import { configureStore } from "@reduxjs/toolkit";
// import MuiButtons from "./components/ui/MuiButton";
import Navbar from "./components/Navbar";
import { createContext } from "react";
import { profiles } from "./constants/profiles";
// import MuiTable from "./components/MuiTable";
// import TodoList from "./components/TodoList";

// export const store = configureStore({
//   reducer: { counter: counterReducer },
// });

// import {
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";
// import Todos from "./components/Todos";

// const queryClient = new QueryClient();

export const ProfileContext = createContext(null);

const App = () => {
  const [profile, setProfile] = useState(null);
  return (
    <>
      <ProfileContext.Provider value={{ profile, setProfile }}>
        <h1>Hello</h1>
        <Navbar />
        <Button>Sourabh</Button>
      </ProfileContext.Provider>
      {/* <TodoList /> */}

      {/* <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider> */}
      {/* <Provider store={store}> */}

      {/* Redux-Toolkit  */}
      {/* <Redux store={store} /> */}
      {/* <MuiButtons /> */}
      {/* <MuiTable /> */}
      {/* </Provider> */}

      {/* React-Router */}
      {/* <NavBarWrapper />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
      <TestUseState /> */}
    </>
  );
};

// const NavBarWrapper = () => {
//   return (
//     <nav>
//       <ul className="navbar">
//         <li>
//           <Link to={`/`}>Home</Link>
//         </li>
//         <li>
//           <Link to={`/store`}>Store</Link>
//         </li>
//         <li>
//           <Link to={`/about`}>About</Link>
//         </li>
//         <li>
//           <Link to={`/redux`}>Redux</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default App;
