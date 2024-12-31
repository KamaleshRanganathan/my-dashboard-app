import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import MainScreen from "./pages/MainScreen";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Newtask from "./pages/NewTask";
import TaskList from "./pages/TaskList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainScreen />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="newTask" element={<Newtask />} />
          <Route path="taskList" element={<TaskList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
