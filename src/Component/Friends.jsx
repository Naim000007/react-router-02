import { useLoaderData } from "react-router-dom";
import Friend from "./Friend";
const Friends = () => {
    const data = useLoaderData();
    return (
        <>
           <div>Number of friends: {data.length}</div> 
           <div> 
           {
            data.map(friend => <Friend
            key={friend.id}
            friend ={friend}
            ></Friend>)
           }
            </div>
        </>
    );
};

export default Friends;