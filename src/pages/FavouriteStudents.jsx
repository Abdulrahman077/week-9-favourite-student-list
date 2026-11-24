import { useContext } from "react";
import StudentContext from "../context/StudentContext";
function FavouriteStudents() {
  const { favourites, setFavourites } = useContext(StudentContext);
  const removeFavourite = (id) => {
    const updatedFavourites = favourites.filter(
      student => student.id !== id
    );

    setFavourites(updatedFavourites);
  };
  return (
    <div>
      <h1>Favourite Students Page</h1>
      {favourites.length === 0 ? (
        <p className="empty-message">
          No favourite students added yet
        </p>
      ) : (
        <ul>
          {favourites.map(student => (
            <li key={student.id}>
              <strong>{student.name}</strong> - Roll No: {student.rollNo}
              <button
                className="remove-btn"
                onClick={() => removeFavourite(student.id)}
              >
                Remove from Favourites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FavouriteStudents