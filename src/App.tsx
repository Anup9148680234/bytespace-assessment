import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { CourseDetails } from "./pages/CourseDetails";
import { Creator } from "./pages/Creator";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path="/creators/:id" element={<Creator />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
