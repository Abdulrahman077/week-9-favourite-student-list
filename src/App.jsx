import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import StudentList from './pages/StudentList'
import FavouriteStudents from './pages/FavouriteStudents'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Favourite Student List</h1>

        <nav className="navbar">
          <NavLink to="/" end>
            Student List
          </NavLink>

          <NavLink to="/favourites">
            Favourite Students
          </NavLink>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/favourites" element={<FavouriteStudents />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App