import Back from "./Components/Back";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Front from "./Components/Front";
import Create from "./Components/Create";
import RequireAuth from "./auth/RequireAuth";
import Login from "./auth/Login";
import Idea from "./Components/Idea";



// import Login from "./Auth/Login";
// import RequireAuth from "./Auth/RequireAuth";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/goal/:id" element={<Idea></Idea>}></Route>
        <Route index element={<Front show="all" />} />
        <Route path="/create" element= { <Create></Create>} />
        <Route
          path="admin"
          element={
            <RequireAuth>
              <Back />
             </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

