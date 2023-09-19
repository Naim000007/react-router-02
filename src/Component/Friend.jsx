import { Link } from "react-router-dom";
import "./friend.css";
const Friend = ({ friend }) => {
  const { name, id, phone, email } = friend;
  return (
    <div className="friend-container">
      <h1>Name : {name}</h1>
      <p>Email : {email}</p>
      <p>Phone :{phone}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4">
      <Link to={`/friend/${id}`}>Show more</Link>
      </button>
    </div>
  );
};

export default Friend;
