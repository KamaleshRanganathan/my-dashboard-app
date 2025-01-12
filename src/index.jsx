import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainScreen from "./MainScreen";
import Dashboard from "./dashboard";
import Contact from "./contacts";
import NoPage from "./components/NoPage";
import Newtask from "./newTask";
import TaskList from "./taskList";

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
