import {Route, Routes} from "react-router";
import HomePage from "../pages/HomePage.jsx";
import CreatePage from "../pages/CreatePage";
import NodeDetailPage from "../pages/NodeDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />}/>
         <Route path="/Node/:id" element={<NodeDetailPage />}/>

      </Routes>
    </div>
  )
}

export default App
