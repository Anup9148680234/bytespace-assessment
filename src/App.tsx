import { Routes, Route } from 'react-router-dom'
import { Home, Courses, Course, Creator, Auth, NotFound } from './pages'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<Course />} />
      <Route path="/creators/:id" element={<Creator />} />
      <Route path="/login" element={<Auth mode="login" />} />
      <Route path="/register" element={<Auth mode="register" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
