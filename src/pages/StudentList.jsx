import { useContext } from "react";
import StudentContext from "../context/StudentContext";
function StudentList() {
  const { favourites, setFavourites } = useContext(StudentContext);
  const students = [
    { id: 1, name: "Arun", rollNo: "101" },
    { id: 2, name: "Rahul", rollNo: "102" },
    { id: 3, name: "Priya", rollNo: "103" },
    { id: 4, name: "Karthik", rollNo: "104" },
    { id: 5, name: "Divya", rollNo: "105" }
  ];
  const addToFavourite = (student) => {
    if (!favourites.some(fav => fav.id === student.id)) {
      setFavourites([...favourites, student]);
    }
  };
  return (
    <div>
      <h1>Student List Page</h1>
      <p>Welcome to the Student List!</p>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <strong>{student.name}</strong> - Roll No: {student.rollNo}
            <button
              className="add-btn"
              onClick={() => addToFavourite(student)}
            >
              Add to Favourites
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList