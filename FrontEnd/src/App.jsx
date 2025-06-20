import {Route, Routes} from "react-router";
import HomePage from "../pages/HomePage.jsx";
import CreatePage from "../pages/CreatePage";
import NodeDetailPage from "../pages/NodeDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
     <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />}/>
         <Route path="/Node/:id" element={<NodeDetailPage />}/>

      </Routes>
    </div>
  )
}

export default App
